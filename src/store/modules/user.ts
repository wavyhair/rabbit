/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 10:41:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 21:21:17
 * @FilePath: \rabbit-ts-vue3\src\store\modules\user.ts
 * @Description:user
 */
import { setProfile, getProfile, removeProfile } from '@/utils/storage'
import { Profile, ProfileRes } from '@/types/user'
import request from '@/utils/request'
import { defineStore } from 'pinia'

enum API {
  login = '/login',
}
/**
 * 个人信息本地存储字段名称
 */
export default defineStore('user', {
  state: () => ({
    // 用户个人信息
    profile: getProfile(),
  }),

  actions: {
    // 用户名和密码登录
    async login(account: string, password: string) {
      const res = await request.post<ProfileRes>(API.login, {
        account,
        password,
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    logout() {
      this.profile = {} as Profile
      removeProfile()
    },
  },
})
