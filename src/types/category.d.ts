interface CategoryTopItem {
  /**
   * 二级分类集合
   */
  children: Child[]
  /**
   * 一级分类id
   */
  id: string
  /**
   * 一级分类图片集
   */
  imageBanners: string[]
  /**
   * 一级分类名称
   */
  name: string
  /**
   * 一级分类图片
   */
  picture: string
}

interface CategoryChildItem {
  brands: null
  categories: null
  /**
   * 商品集合
   */
  goods: GoodsItem[]
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名称
   */
  name: string
  parentId: null
  parentName: null
  /**
   * 二级分类图片
   */
  picture: string
  saleProperties: null
}
