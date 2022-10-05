/*
 * @Author: CHENJIE
 * @Date: 2022-09-12 09:29:09
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 13:27:40
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
  HomeProduct,
  HomeProductResponse,
  SpecialResponse,
  Special,
} from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
enum API {
  getSlides = 'home/banner',
  getNewList = '/home/new',
  getHotList = '/home/hot',
  getBrandList = '/home/brand',
  getProduct = '/home/goods',
  getSpecial = '/home/special',
}
export default defineStore('home', {
  state: () => ({
    slides: [] as SlidesItem[],
    newGoodList: [] as GoodItem[],
    hotGoodList: [] as HotGoods[],
    brandList: [] as Brand[],
    homeProduct: [] as HomeProduct[],
    specialList: [] as Special[],
  }),
  persist: {
    enabled: true,
  },
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
    // 获取商品推荐
    async getProduct() {
      const res = await request.get<HomeProductResponse>(API.getProduct)
      this.homeProduct = res.data.result
    },
    // 获取最新专题
    async getSpecial() {
      const res = await request.get<SpecialResponse>(API.getSpecial)
      this.specialList = res.data.result
    },
  },
})
