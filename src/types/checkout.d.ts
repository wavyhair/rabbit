/*
 * @Author: CHENJIE
 * @Date: 2022-10-11 20:43:13
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-11 21:40:15
 * @FilePath: \rabbit-ts-vue3\src\types\checkout.d.ts
 * @Description:checkout
 */
import { ApiResponse } from './data.d'
export interface UserAddress {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  fullLocation: string
  postalCode: string
  addressTags: string
}

export interface Good {
  id: string
  name: string
  picture: string
  count: number
  skuId: string
  attrsText: string
  price: string
  payPrice: string
  totalPrice: string
  totalPayPrice: string
}

export interface Summary {
  goodsCount: number
  totalPrice: number
  totalPayPrice: number
  postFee: number
  discountPrice: number
}

// 生成订单
export interface CheckoutInfo {
  userAddresses: UserAddress[]
  goods: Good[]
  summary: Summary
}
export interface OrderPayInfo {
  id: string
  createTime: string
  payType: number
  orderState: number
  payLatestTime: string
  countdown: number
  postFee: number
  payMoney: number
  payChannel: number
  totalMoney: number
  totalNum: number
  deliveryTimeType: number
  receiverContact: string
  receiverMobile: string
  provinceCode: string
  cityCode: string
  countyCode: string
  receiverAddress: string
  payTime?: any
  consignTime?: any
  endTime?: any
  closeTime?: any
  evaluationTime?: any
  skus: {
    id: string
    spuId: string
    name: string
    quantity: number
    image: string
    realPay: number
    curPrice: number
    totalMoney?: any
    properties: {
      propertyMainName: string
      propertyValueName: string
    }[]
    attrsText: string
  }[]
  arrivalEstimatedTime?: any
}
export type OrderPayInfoRes = ApiResponse<OrderPayInfo>
