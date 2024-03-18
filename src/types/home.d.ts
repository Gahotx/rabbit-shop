interface BannerItem {
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * id
   */
  id: string
  /**
   * banner链接
   */
  imgUrl: string
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number
}

interface CategoryItem {
  /**
   * 展示图标
   */
  icon: string
  /**
   * id
   */
  id: string
  /**
   * 分类名称
   */
  name: string
}

interface HotItem {
  /**
   * 推荐说明
   */
  alt: string
  /**
   * id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转地址
   */
  target: string
  /**
   * 推荐标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}
