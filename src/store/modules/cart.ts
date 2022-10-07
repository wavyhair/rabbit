/*
 * @Author: CHENJIE
 * @Date: 2022-10-07 10:01:13
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 12:00:52
 * @FilePath: \rabbit-ts-vue3\src\store\modules\cart.ts
 * @Description:cart
 */
import { CartItem, CartItemRes } from '@/types/cart'
import request from '@/utils/request'
import { defineStore } from 'pinia'

enum API {
  addCart = '/member/cart',
  getCartList = '/member/cart',
  deleteCart = '/member/cart',
}
export default defineStore('cart', {
  // 状态
  state: () => ({
    list: [] as CartItem[], // 购物车数组
  }),

  // 方法
  actions: {
    /**
     * 添加购物车
     * @param data
     */
    async addCart(data: { skuId: string; count: number }) {
      await request.post(API.addCart, data)
      this.getCartList()
    },
    /**
     * 获取购物车列表
     */
    async getCartList() {
      const res = await request.get<CartItemRes>(API.getCartList)
      this.list = res.data.result
    },
    /**
     * 删除购物车商品
     * @param skuIds
     */
    async deleteCart(skuIds: string[]) {
      await request.delete(API.deleteCart, {
        data: { ids: skuIds },
      })
      // 重新获取最新购物车列表
      this.getCartList()
    },
  },
  // 计算
  getters: {
    /**
     * 有效商品列表
     */
    effectiveList(): CartItem[] {
      return this.list.filter((item) => item.stock && item.isEffective)
    },
    /**
     * 有效商品数量
     */
    effectiveListCounts(): number {
      return this.effectiveList.reduce((sum, item) => sum + item.count, 0)
    },
    // 总金额
    effectiveListPrice(): string {
      return this.effectiveList
        .reduce((sum, item) => sum + item.count * Number(item.nowPrice), 0)
        .toFixed(2)
    },
  },
})