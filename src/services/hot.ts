import { http } from '@/utils/request'

/**
 * 热门推荐-小程序
 */
export function getHotRecommendAPI(url: string, data: GetHotRecommendReq) {
  return http<GetHotRecommendRes>({
    method: 'GET',
    url,
    data
  })
}
