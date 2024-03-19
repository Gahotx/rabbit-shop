interface GetGoodsDetailRes {
  /**
   * 品牌信息
   */
  brand: BrandData
  /**
   * 所属分类，多级以数组形式体现，如[一级分类，二级分类，三级分类]
   */
  categories: GoodsCategoryItem[]
  /**
   * 收藏数量
   */
  collectCount: number
  /**
   * 评价数量
   */
  commentCount: number
  /**
   * 备注
   */
  desc: string
  /**
   * 商品详情
   */
  details: GoodsDetails
  /**
   * 折扣
   */
  discount: number
  evaluationInfo: null
  /**
   * 24小时热销
   */
  hotByDay: GoodsItem[]
  /**
   * id
   */
  id: string
  /**
   * 库存
   */
  inventory: number
  isCollect: null
  /**
   * 是否为预售商品
   */
  isPreSale: boolean
  /**
   * 主图图片集合
   */
  mainPictures: string[]
  /**
   * 主图视频集合
   */
  mainVideos: string[]
  /**
   * 商品名称
   */
  name: string
  /**
   * 原价
   */
  oldPrice: string
  /**
   * 当前价格
   */
  price: string
  recommends: null
  /**
   * 销量
   */
  salesCount: number
  /**
   * 同类商品
   */
  similarProducts: GoodsItem[]
  /**
   * sku集合
   */
  skus: SkuItem[]
  /**
   * 可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
   */
  specs: SpecItem[]
  /**
   * spu编码
   */
  spuCode: string
  /**
   * 用户收货地址列表
   */
  userAddresses: AddressItem[]
  /**
   * 主图视频比例,1为1:1/16:9，2为3:4
   */
  videoScale: number
}

interface GoodsCategoryItem {
  /**
   * 分类id
   */
  id: string
  layer: number
  /**
   * 分类名称
   */
  name: string
  parent: null | ParentCategory
}

interface ParentCategory {
  id: string
  layer: number
  name: string
  parent: null
}

interface BrandData {
  desc: null
  /**
   * 品牌id
   */
  id: string
  /**
   * logo
   */
  logo: string
  /**
   * 品牌名称
   */
  name: string
  /**
   * 品牌英文名称
   */
  nameEn: string
  /**
   * 图片
   */
  picture: string
  place: null
  type: null
}

/**
 * 商品详情
 */
interface GoodsDetails {
  /**
   * 商品详情图片集合
   */
  pictures: string[]
  /**
   * 商品属性集合
   */
  properties: PropertyData[]
}

/**
 * 属性信息
 */
interface PropertyData {
  /**
   * 属性名称
   */
  name: string
  /**
   * 属性值
   */
  value: string
}

interface SkuItem {
  /** id */
  id: string
  /** 库存 */
  inventory: number
  /** 原价 */
  oldPrice: number
  /** sku图片 */
  picture: string
  /** 当前价格 */
  price: number
  /** sku编码 */
  skuCode: string
  /** 规格集合[ 规格信息 ] */
  specs: SkuSpecItem[]
}

interface SkuSpecItem {
  /** 规格名称 */
  name: string
  /** 可选值名称 */
  valueName: string
}

interface SpecItem {
  /** 规格名称 */
  name: string
  /** 可选值集合[ 可选值信息 ] */
  values: SpecValueItem[]
}

interface SpecValueItem {
  /** 是否可售 */
  available: boolean
  /** 可选值备注 */
  desc: string
  /** 可选值名称 */
  name: string
  /** 可选值图片链接 */
  picture: string
}

interface AddressItem {
  /** 收货人姓名 */
  receiver: string
  /** 联系方式 */
  contact: string
  /** 省份编码 */
  provinceCode: string
  /** 城市编码 */
  cityCode: string
  /** 区/县编码 */
  countyCode: string
  /** 详细地址 */
  address: string
  /** 默认地址，1为是，0为否 */
  isDefault: number
  /** 收货地址 id */
  id: string
  /** 省市区 */
  fullLocation: string
}
