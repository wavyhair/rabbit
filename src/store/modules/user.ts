/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 10:41:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-09 19:39:47
 * @FilePath: \rabbit-ts-vue3\src\store\modules\user.ts
 * @Description:user
 */
import { setProfile, getProfile, removeProfile } from '@/utils/storage'
import { Profile, ProfileRes } from '@/types/user'
import request from '@/utils/request'
import { defineStore } from 'pinia'
import useStore from '..'

enum API {
  login = '/login',
  sendMobileMsg = '/login/code',
  qqLogin = '/login/social',
  sendQQBindMsg = '/login/social/code',
  qqBindLogin = '/login/social/bind',
  sendQQPathMsg = '/register/code',
  qqPatchLogin = '/login/social/',
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
    // 退出
    logout() {
      this.profile = {} as Profile
      removeProfile()
    },
    // 获取手机验证码
    async sendMobileMsg(mobile: string) {
      await request.get(API.sendMobileMsg, {
        params: {
          mobile,
        },
      })
    },
    // 手机号登录
    async mobileLogin(mobile: string, code: string) {
      const res = await request.post<ProfileRes>('/login/code', {
        mobile,
        code,
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    //  source: 1为pc，2为webapp，3为微信小程序, 4为Android, 5为ios, 6为qq, 7为微信
    async qqLogin(openId: string) {
      const res = await request.post<ProfileRes>(API.qqLogin, {
        unionId: openId,
        source: 6,
      })
      const { cart } = useStore()
      cart.mergeLocalCart()
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    // 绑定qq的短信验证码
    async sendQQBindMsg(mobile: string) {
      await request.get(API.sendQQBindMsg, {
        params: {
          mobile,
        },
      })
    },
    async qqBindLogin(openId: string, mobile: string, code: string) {
      const res = await request.post<ProfileRes>(API.qqBindLogin, {
        mobile,
        code,
        unionId: openId,
      })
      const { cart } = useStore()
      cart.mergeLocalCart()
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    async sendQQPathMsg(mobile: string) {
      await request.get(API.sendQQPathMsg, {
        params: {
          mobile,
        },
      })
    },

    async qqPatchLogin(data: any) {
      const res = await request.post<ProfileRes>(
        `${API.qqBindLogin}${data.openId}/complement`,
        data
      )
      const { cart } = useStore()
      cart.mergeLocalCart()
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
  },
})
