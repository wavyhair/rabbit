/*
 * @Author: CHENJIE
 * @Date: 2022-10-01 16:31:57
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-01 22:50:54
 * @FilePath: \rabbit-ts-vue3\src\types\goods.d.ts
 * @Description:商品模块类型
 */

import { ApiResponse } from './data'

// 商品的规格的值的类型
export type SpecValue = {
  desc: string
  name: string
  picture: string
  selected: boolean
  disabled: boolean
}
// 商品的规格类型
export type Spec = {
  name: string
  values: SpecValue[]
}
// sku的类型
export type Sku = {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  specs: {
    name: string
    valueName: string
  }[]
}

// 商品模块的类型声明
export type GoodsInfo = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  skus: Sku[]
  categories: {
    id: string
    name: string
  }[]
  specs: Spec[]
}
// 商品模块响应数据
export type GoodsInfoResponse = ApiResponse<GoodsInfo>
