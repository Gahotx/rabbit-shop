import { useMemberStore } from '@/stores'

// 请求基地址
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 请求拦截器
const httpInterceptor: UniApp.InterceptorOptions = {
  invoke: (options: UniApp.RequestOptions) => {
    // 1. 非 http 开头的请求，拼接基地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 2. 请求超时时间
    options.timeout = 10000
    // 3. 添加小程序端请求头标识
    options.header = {
      'source-client': 'miniapp',
      ...options.header
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  }
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 请求
uni.addInterceptor('uploadFile', httpInterceptor)

// 封装统一的请求方法
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<PublicResponse<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 成功回调
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 状态吗2xx，请求成功
          resolve(res.data as PublicResponse<T>)
        } else if (res.statusCode === 401) {
          // 401 未授权，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.showToast({
            title: '身份过期，请重新登录',
            icon: 'none',
            success: () => {
              setTimeout(() => {
                uni.navigateTo({ url: '/pages/login/login' })
              }, 500)
            }
          })
          reject(res)
        } else {
          // 其他错误
          uni.showToast({
            title: (res.data as PublicResponse<T>).msg || '请求失败，请稍后重试',
            icon: 'none'
          })
          reject(res)
        }
      },
      // 失败回调
      fail: (err) => {
        uni.showToast({
          title: '请求失败，请稍后重试',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}
