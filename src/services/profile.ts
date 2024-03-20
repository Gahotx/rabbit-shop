import { http } from '@/utils/request'

/**
 * 获取个人信息
 */
export function getMemberProfileAPI() {
  return http<GetMemberProfileRes>({
    method: 'GET',
    url: '/member/profile'
  })
}

/**
 * 修改个人信息
 */
export function updateMemberProfileAPI(data: UpdateMemberProfileReq) {
  return http<SimpleLoginRes>({
    method: 'PUT',
    url: '/member/profile',
    data
  })
}
