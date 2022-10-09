/*
 * @Author: CHENJIE
 * @Date: 2022-10-07 10:01:13
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-09 16:45:15
 * @FilePath: /src/store/modules/cart.ts
 * @Description:cart
 */
import { CartItem, CartItemRes } from '@/types/cart'
import request from '@/utils/request'
import { defineStore } from 'pinia'

enum API {
  addCart = '/member/cart',
  getCartList = '/member/cart',
  deleteCart = '/member/cart',
  updateCart = '/member/cart/',
  updateCartAllSelected = '/member/cart/selected',
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
    /**
     * 修改购物车是否选中/商品数量
     * @param skuId
     * @param data
     */
    async updateCart(
      skuId: string,
      data: { selected?: boolean; count?: number }
    ) {
      await request.put(API.updateCart + skuId, data)
      // 重新获取最新购物车列表
      this.getCartList()
    },
    // 修改全选或者全不选
    async updateCartAllSelected(isSelected: boolean) {
      await request.put(API.updateCartAllSelected, {
        selected: isSelected,
      })
      // 获取购物车列表
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
    // 是否全选
    isAllSelected(): boolean {
      return (
        !!this.effectiveList.length &&
        this.effectiveList.every((item) => item.selected)
      )
    },
    // 已选择的列表
    selectedList(): CartItem[] {
      return this.effectiveList.filter((item) => item.selected)
    },
    // 已选择的商品总数
    selectedListCounts(): number {
      return this.selectedList.reduce((sum, item) => sum + item.count, 0)
    },
    // 已选择的列表总价
    selectedListPrice(): string {
      return this.selectedList
        .reduce((sum, item) => sum + item.count * Number(item.nowPrice), 0)
        .toFixed(2)
    },
  },
})
