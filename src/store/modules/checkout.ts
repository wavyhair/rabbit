/*
 * @Author: CHENJIE
 * @Date: 2022-10-11 20:41:42
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-11 20:44:00
 * @FilePath: \rabbit-ts-vue3\src\store\modules\checkout.ts
 * @Description:checkout
 */
import request from '@/utils/request'
import { defineStore } from 'pinia'
import { CheckoutInfo, UserAddress } from '@/types/checkout'
import { ApiResponse } from '@/types/data'

const useCheckoutStore = defineStore({
  id: 'checkout',
  state: () => ({
    checkoutInfo: {} as CheckoutInfo,
  }),
  actions: {
    async getCheckoutInfo() {
      const res = await request.get<ApiResponse<CheckoutInfo>>(
        '/member/order/pre'
      )
      this.checkoutInfo = res.data.result
    },
    async addAddress(address: UserAddress) {
      await request.post('/member/address', address)
      // 添加完地址，重新渲染
      this.getCheckoutInfo()
    },
    async updateAddress(address: UserAddress) {
      await request.put(`/member/address/${address.id}`, address)
      // 添加完地址，重新渲染
      this.getCheckoutInfo()
    },
  },
  getters: {
    showAddress(): UserAddress | null {
      // 如果没有地址，返回null
      if (this.checkoutInfo?.userAddresses?.length === 0) {
        return null
      }
      // 如果有地址，找默认地址
      const defaultAddress = this.checkoutInfo?.userAddresses?.find(
        (item) => item.isDefault === 0
      )
      if (defaultAddress) {
        return defaultAddress
      } else {
        return this.checkoutInfo?.userAddresses?.[0]
      }
    },
  },
})

export default useCheckoutStore
