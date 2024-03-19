import { http } from '@/utils/request'

/**
 * 商品详情
 * @param id 商品id
 */

export function getGoodsDetailAPI(id: string) {
  return http<GetGoodsDetailRes>({
    method: 'GET',
    url: '/goods',
    data: { id }
  })
}
