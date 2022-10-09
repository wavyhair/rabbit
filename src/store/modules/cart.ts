/*
 * @Author: CHENJIE
 * @Date: 2022-10-07 10:01:13
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-09 19:36:02
 * @FilePath: \rabbit-ts-vue3\src\store\modules\cart.ts
 * @Description:cart
 */
import { ApiResponse } from '@/types/data'

import { CartItem, CartItemRes } from '@/types/cart'
import request from '@/utils/request'
import { defineStore } from 'pinia'
import useStore from '..'

enum API {
  addCart = '/member/cart',
  getCartList = '/member/cart',
  deleteCart = '/member/cart',
  updateCart = '/member/cart/',
  updateCartAllSelected = '/member/cart/selected',
  updateCartItem = '/goods/stock/',
  mergeLocalCart = '/member/cart/merge',
}
export default defineStore('cart', {
  // 状态
  state: () => ({
    list: [] as CartItem[], // 购物车数组
  }),
  persist: true,
  // 方法
  actions: {
    /**
     * 添加购物车
     * @param data
     */
    async addCart(data: CartItem) {
      if (this.isLogin) {
        await request.post(API.addCart, data)
        this.getCartList()
      } else {
        // 1. 判断购物车列表中是否有该商品数据
        const goods = this.list.find((item) => item.skuId === data.skuId)
        if (goods) {
          // 2. 如果商品存在，直接把数量加起来
          goods.count += data.count
        } else {
          // 3. 如果商品不存在，直接添加该商品
          this.list.unshift(data)
        }
      }
    },
    /**
     * 获取购物车列表
     */
    async getCartList() {
      if (this.isLogin) {
        const res = await request.get<CartItemRes>(API.getCartList)
        this.list = res.data.result
      } else {
        // 没登陆i的情况夏获取购物车列表数据需要检查更新商品 sku 的库存、价格、是否有效
        this.list.forEach(async (cartItem) => {
          const { skuId } = cartItem
          const res = await request.get<ApiResponse<CartItem>>(
            API.updateCartItem + skuId
          )
          const lastCartInfo = res.data.result
          // 更新现价
          cartItem.nowPrice = lastCartInfo.nowPrice
          // 更新库存
          cartItem.stock = lastCartInfo.stock
          // 更新是否有效
          cartItem.isEffective = lastCartInfo.isEffective
        })
      }
    },
    /**
     * 删除购物车商品
     * @param skuIds
     */
    async deleteCart(skuIds: string[]) {
      if (this.isLogin) {
        await request.delete(API.deleteCart, {
          data: { ids: skuIds },
        })
        // 重新获取最新购物车列表
        this.getCartList()
      } else {
        this.list = this.list.filter((item) => !skuIds.includes(item.skuId))
      }
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
      if (this.isLogin) {
        await request.put(API.updateCart + skuId, data)
        // 重新获取最新购物车列表
        this.getCartList()
      } else {
        const goods = this.effectiveList.find((item) => item.skuId === skuId)
        // 这里要判断是否等于 undefined 因为返回结果是布尔值
        if (data.selected !== undefined) {
          goods!.selected = data.selected
        }
        if (data.count) {
          goods!.count = data.count
        }
      }
    },
    /**
     * 修改全选或者全不选
     * @param isSelected
     */
    async updateCartAllSelected(isSelected: boolean) {
      if (this.isLogin) {
        await request.put(API.updateCartAllSelected, {
          selected: isSelected,
        })
        // 获取购物车列表
        this.getCartList()
      } else {
        this.effectiveList.forEach((item) => (item.selected = isSelected))
      }
    },
    /**
     *  合并购物车
     */
    async mergeLocalCart() {
      const data = this.list.map(({ skuId, selected, count }) => ({
        skuId,
        selected,
        count,
      }))
      await request.post(API.mergeLocalCart, data)
      // 合并成功，重新获取购物车列表
      this.getCartList()
    },
  },
  // 计算
  getters: {
    isLogin(): boolean {
      const { user } = useStore()
      return !!user.profile.token
    },
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
