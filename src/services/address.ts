import { http } from '@/utils/request'

/**
 * 获取收货地址列表
 */
export function getAddressListAPI() {
  return http<GetAddressListRes[]>({
    method: 'GET',
    url: '/member/address'
  })
}

/**
 * 获取收货地址详情
 * @param id 收货地址id
 */
export function getAddressDetailAPI(id: string) {
  return http<GetAddressListRes>({
    method: 'GET',
    url: `/member/address/${id}`
  })
}

/**
 * 修改收货地址
 */
export function updateAddressAPI(id: string, data: UpdateAddressReq) {
  return http<UpdateAddressRes>({
    method: 'PUT',
    url: `/member/address/${id}`,
    data
  })
}

/**
 * 添加收货地址
 */
export function addAddressAPI(data: UpdateAddressReq) {
  return http<UpdateAddressRes>({
    method: 'POST',
    url: '/member/address',
    data
  })
}

/**
 * 删除收货地址
 */
export function deleteAddressAPI(id: string) {
  return http<null>({
    method: 'DELETE',
    url: `/member/address/${id}`
  })
}
