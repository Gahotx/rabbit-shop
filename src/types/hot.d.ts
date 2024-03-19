interface GetHotRecommendReq extends PageParams {
  /**
   * Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
   */
  subType?: string
}

interface GetHotRecommendRes {
  /**
   * 活动图片
   */
  bannerPicture: string
  /**
   * id信息
   */
  id: string
  /**
   * 子类选项集合
   */
  subTypes: SubTypeItem[]
  /**
   * 活动标题
   */
  title: string
}

interface SubTypeItem {
  goodsItems: PageResult<GoodsItem>
  /**
   * 子类选项id
   */
  id: string
  /**
   * 子类选项名称
   */
  title: string
  isFinish?: boolean
  scrollTop?: number
}
