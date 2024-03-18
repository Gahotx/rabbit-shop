import { http } from '@/utils/request'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置 1 为首页（默认值）2 为商品分类页
 */
export function getHomeBannerAPI(distributionSite = 1) {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

/**
 * 首页-前台分类-小程序
 */
export function getHomeCategoryAPI() {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

/**
 * 首页-热门推荐-小程序
 */
export function getHomeHotAPI() {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}

/**
 * 猜你喜欢-小程序
 * @param page 页码
 * @param pageSize 页大小
 */
export function getHomeGuessAPI(data?: PageParams) {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data
  })
}
