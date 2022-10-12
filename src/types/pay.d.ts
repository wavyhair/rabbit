/*
 * @Author: CHENJIE
 * @Date: 2022-10-12 19:40:47
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 19:43:34
 * @FilePath: \rabbit-ts-vue3\src\types\pay.d.ts
 * @Description:pay.d.ts
 */
import type { ApiResponse } from './data'
interface Properties {
  propertyMainName: string
  propertyValueName: string
}
interface Skus {
  attrsText: string
  curPrice: number
  id: string
  image: string
  name: string
  properties: Properties
  quantity: number
  realPay: number
  spuId: string
  totalMoney: null
}
interface Order {
  arrivalEstimatedTime: string
  cityCode: string
  closeTime: null
  consignTime: null
  countdown: number
  countyCode: string
  createTime: string
  deliveryTimeType: number
  endTime: null
  evaluationTime: null
  id: string
  orderState: number
  payChannel: number
  payLatestTime: string
  payMoney: number
  payState: number
  payTime: string
  payType: number
  postFee: number
  provinceCode: string
  receiverAddress: string
  receiverContact: string
  receiverMobile: string
  skus: Skus[]
  totalMoney: number
  totalNum: number
}
export type OrderResponse = ApiResponse<Order>
