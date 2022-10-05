import exp from 'constants'
import { ApiResponse } from './data'

/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 10:43:33
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 10:44:59
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
export type ProfileRes = ApiResponse<Profile>
