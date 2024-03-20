interface wxLoginReq {
  /**
   * code 通过 wx.login() 获取
   */
  code: string
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  encryptedData: string
  /**
   * 通过 getphonenumber 事件回调中获取
   */
  iv: string
}

interface wxLoginRes {
  /**
   * 用户名
   */
  account: string
  /**
   * 用户头像
   */
  avatar: string
  /**
   * 用户id
   */
  id: number
  /**
   * 用户手机号
   */
  mobile: string
  /**
   * 用户昵称
   */
  nickname: null | string
  /**
   * 用于后续接口调用的token，有效期三天
   */
  token: string
}

interface simpleLoginReq {
  /**
   * 用户名或手机号
   */
  account: string
  /**
   * 密码
   */
  password: string
}

interface simpleLoginRes {
  /**
   * 用户名
   */
  account: string
  avatar: string
  /**
   * 生日
   */
  birthday: string
  /**
   * 城市编码
   */
  cityCode: string
  /**
   * 性别，男、女、未知
   */
  gender: string
  /**
   * 用户ID
   */
  id: number
  /**
   * 手机号
   */
  mobile: string
  nickname: string
  /**
   * 职业
   */
  profession: string
  /**
   * 省份编码
   */
  provinceCode: string
  token: string
}
