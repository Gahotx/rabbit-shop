import { http } from '@/utils/request'

/**
 * 填写订单-获取预付订单
 */
export function getPreOrderAPI() {
  return http<GetPreOrderRes>({
    method: 'GET',
    url: '/member/order/pre'
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export function getNowOrderAPI(data: GetNowOrderReq) {
  return http<GetNowOrderRes>({
    method: 'GET',
    url: '/member/order/pre/now',
    data
  })
}

/**
 * 提交订单
 */
export function submitOrderAPI(data: SubmitOrderReq) {
  return http<SubmitOrderRes>({
    method: 'POST',
    url: '/member/order',
    data
  })
}
