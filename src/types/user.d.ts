import exp from 'constants'
import { ApiResponse } from './data'

/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 10:43:33
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 11:52:51
 * @FilePath: \rabbit-ts-vue3\src\types\user.d.ts
 * @Description:
 */
import { ApiResponse } from './data'
export interface Profile {
  id: string
  account: string
  mobile: string
  token: string
  avatar: string
  nickname: string
  gender: string
  birthday?: string
  cityCode: string
  provinceCode: string
  profession: string
}

// QQ信息-用户详情
export interface QQUserInfo {
  ret: number
  msg: string
  is_lost: number
  nickname: string
  gender: string
  gender_type: number
  province: string
  city: string
  year: string
  constellation: string
  figureurl: string
  figureurl_1: string
  figureurl_2: string
  figureurl_qq_1: string
  figureurl_qq_2: string
  figureurl_qq: string
  figureurl_type: string
  is_yellow_vip: string
  vip: string
  yellow_vip_level: string
  level: string
  is_yellow_year_vip: string
}
// QQ返回信息
export interface QQUserInfoRes {
  status: string
  fmt: string
  ret: number
  code: number
  data: QQUserInfo
  seq: string
  dataText: string
}
export type ProfileRes = ApiResponse<Profile>
