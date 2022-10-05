/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 10:41:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 11:00:31
 * @FilePath: \rabbit-ts-vue3\src\store\modules\user.ts
 * @Description:user
 */
import { Profile, ProfileRes } from '@/types/user'
import request from '@/utils/request'
import { defineStore } from 'pinia'

enum API {
  login = '/login',
}
/**
 * 个人信息本地存储字段名称
 */
const PROFILE_KEY = 'PROFILE_KEY'
export default defineStore('user', {
  state: () => ({
    // 用户个人信息
    profile: {} as Profile,
  }),
  persist: {
    enabled: true,
    // 自定义持久化参数
    strategies: [
      {
        key: PROFILE_KEY,
        storage: sessionStorage,
        paths: ['profile'],
      },
    ],
  },
  actions: {
    // 用户名和密码登录
    async login(account: string, password: string) {
      const res = await request.post<ProfileRes>(API.login, {
        account,
        password,
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
    },
  },
})
