/*
 * @Author: CHENJIE
 * @Date: 2022-09-12 09:29:09
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 10:56:13
 * @FilePath: \rabbit-ts-vue3\src\store\modules\home.ts
 * @Description:
 */
import { SlidesItemResponse, SlidesItem } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
enum API {
  getSlides = 'home/banner',
}
export default defineStore('home', {
  state: () => ({
    slides: [] as SlidesItem[],
  }),
  actions: {
    // 获取广告轮播图
    async getSlides() {
      const res = await request.get<SlidesItemResponse>(API.getSlides)
      this.slides = res.data.result
    },
  },
})
