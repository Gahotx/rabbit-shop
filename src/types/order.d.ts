interface GetPreOrderRes {
  /**
   * 商品集合
   */
  goods: OrderGood[]
  /**
   * 结算信息
   */
  summary: OrderSummary
  /**
   * 用户地址列表
   */
  userAddresses: UserAddressItem[]
}

interface OrderGood {
  /**
   * 属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string
  /**
   * 数量
   */
  count: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 实付单价
   */
  payPrice: number
  /**
   * 图片
   */
  picture: string
  /**
   * 原单价
   */
  price: number
  /**
   * SKUID
   */
  skuId: string
  /**
   * 实付价格小计
   */
  totalPayPrice: number
  /**
   * 小计总价
   */
  totalPrice: number
}

interface OrderSummary {
  /**
   * 折扣总计
   */
  discountPrice: number
  /**
   * 商品件数
   */
  goodsCount: number
  /**
   * 邮费
   */
  postFee: number
  /**
   * 应付总计
   */
  totalPayPrice: number
  /**
   * 价格总计
   */
  totalPrice: number
}

interface UserAddressItem {
  /**
   * 详细地址
   */
  address: string
  /**
   * 城市编码
   */
  cityCode: string
  /**
   * 联系方式
   */
  contact: string
  /**
   * 所在区/县编码
   */
  countyCode: string
  /**
   * 完整行政区
   */
  fullLocation: string
  /**
   * id
   */
  id: string
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number
  /**
   * 邮编
   */
  postalCode: string
  /**
   * 省份编码
   */
  provinceCode: string
  /**
   * 收货人
   */
  receiver: string
}

interface GetNowOrderReq {
  /**
   * 下单时已经选择好的地址id
   */
  addressId?: string
  /**
   * 购买商品的数量
   */
  count: string
  /**
   * 商品skuId
   */
  skuId: string
}

type GetNowOrderRes = GetPreOrderRes

interface SubmitOrderReq {
  /** 所选地址Id */
  addressId: string
  /** 配送时间类型，1为不限，2为工作日，3为双休或假日 */
  deliveryTimeType: number
  /** 订单备注 */
  buyerMessage: string
  /** 商品集合[ 商品信息 ] */
  goods: {
    /** 数量 */
    count: number
    /** skuId */
    skuId: string
  }[]
  /** 支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值 */
  payChannel: 1 | 2
  /** 支付方式，1为在线支付，2为货到付款 */
  payType: 1 | 2
}

interface SubmitOrderRes {
  /** 订单Id */
  id: string
}
