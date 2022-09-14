/*
 * @Author: CHENJIE
 * @Date: 2022-09-12 09:29:09
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-14 21:00:21
 * @FilePath: \rabbit-ts-vue3\src\store\modules\home.ts
 * @Description:
 */
import {
  SlidesItemResponse,
  SlidesItem,
  GoodItem,
  GoodItemResponse,
  HotGoods,
  HotGoodsResponse,
} from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
enum API {
  getSlides = 'home/banner',
  getNewList = '/home/new',
  getHotList = '/home/hot',
}
export default defineStore('home', {
  state: () => ({
    slides: [] as SlidesItem[],
    newGoodList: [] as GoodItem[],
    hotGoodList: [] as HotGoods[],
  }),
  actions: {
    // 获取广告轮播图
    async getSlides() {
      const res = await request.get<SlidesItemResponse>(API.getSlides)
      this.slides = res.data.result
    },
    // 获取新鲜好物
    async getNewList() {
      const res = await request.get<GoodItemResponse>(API.getNewList)
      this.newGoodList = res.data.result
    },
    // 获取人气推荐
    async getHotList() {
      const res = await request.get<HotGoodsResponse>(API.getHotList)
      this.hotGoodList = res.data.result
    },
  },
})
