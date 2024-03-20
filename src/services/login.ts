import { http } from '@/utils/request'

/**
 * 小程序登录
 * @param code 通过 wx.login() 获取
 * @param encryptedData 通过 getphonenumber 事件回调中获取
 * @param iv 通过 getphonenumber 事件回调中获取
 */
export function wxLoginAPI(data: wxLoginReq) {
  return http<wxLoginRes>({
    method: 'POST',
    url: '/login/wxMin',
    data
  })
}

/**
 * 小程序登录-内测版
 * @param phoneNumber 不传加密信息时，模拟的手机号必传
 */
export function wxLoginBetaAPI(phoneNumber: string) {
  return http<wxLoginRes>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber
    }
  })
}
/**
 * 传统登录-用户名+密码
 * @param account 用户名或手机号 13123456789
 * @param password 密码 123456
 */
export function simpleLoginAPI(data: simpleLoginReq) {
  return http<SimpleLoginRes>({
    method: 'POST',
    url: '/login',
    data
  })
}
