/** 公共请求响应 */
interface PublicResponse<T> {
  code: string
  msg: string
  result: T
}

/** 分页返参 */
interface PageResult<T> {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: T[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}

/** 分页传参 */
interface PageParams {
  /**
   * 页码默认值1
   */
  page?: number
  /**
   * 页大小默认是10
   */
  pageSize?: number
}

/** 通用商品类型 */
interface GoodsItem {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
