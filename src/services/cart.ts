import { http } from '@/utils/request'

/**
 * 加入购物车
 */
export function addCartAPI(data: AddCartReq) {
  return http<AddCartRes>({
    method: 'POST',
    url: '/member/cart',
    data
  })
}

/**
 * 获取购物车列表
 */
export function getCartListAPI() {
  return http<GetCartListRes[]>({
    method: 'GET',
    url: '/member/cart'
  })
}

/**
 * 删除/清空购物车单品
 */
export function deleteCartAPI(data: DeleteCartReq) {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data
  })
}

/**
 * 修改购物车单品
 */
export function updateCartAPI(skuId: string, data: UpdateCartReq) {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data
  })
}

/**
 * 购物车全选/取消全选
 */
export function selectAllCartAPI(data: SelectAllCartReq) {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data
  })
}
