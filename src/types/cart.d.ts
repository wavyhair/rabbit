/*
 * @Author: CHENJIE
 * @Date: 2022-10-07 10:36:03
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 10:40:53
 * @FilePath: \rabbit-ts-vue3\src\types\cart.d.ts
 * @Description:
 */

import { ApiResponse } from './data'
// 单个购物车商品
export interface CartItem {
  id: string
  skuId: string
  name: string
  attrsText: string
  picture: string
  price: string
  nowPrice: string
  nowOriginalPrice: string
  selected: boolean
  stock: number
  count: number
  isEffective: boolean
  // discount?: any;
  isCollect: boolean
  postFee: number
}

export type CartItemRes = ApiResponse<CartItem[]>
