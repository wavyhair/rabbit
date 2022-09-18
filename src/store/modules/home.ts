/*
 * @Author: CHENJIE
 * @Date: 2022-09-12 09:29:09
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-18 15:59:19
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
  BrandResponse,
  Brand,
} from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
enum API {
  getSlides = 'home/banner',
  getNewList = '/home/new',
  getHotList = '/home/hot',
  getBrandList = '/home/brand',
}
export default defineStore('home', {
  state: () => ({
    slides: [] as SlidesItem[],
    newGoodList: [] as GoodItem[],
    hotGoodList: [] as HotGoods[],
    brandList: [] as Brand[],
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
    // 获取热门品牌
    async getBrandList() {
      const res = await request.get<BrandResponse>(API.getBrandList)
      this.brandList = res.data.result
    },
  },
})
