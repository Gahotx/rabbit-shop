import { http } from '@/utils/request'

/**
 * 分类列表-小程序
 */
export function getCategoryTopAPI() {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top'
  })
}
