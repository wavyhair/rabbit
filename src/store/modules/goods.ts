/*
 * @Author: CHENJIE
 * @Date: 2022-09-28 20:03:42
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-01 16:35:03
 * @FilePath: \rabbit-ts-vue3\src\store\modules\goods.ts
 * @Description:goods模块
 */
import { GoodsInfo, GoodsInfoResponse } from '@/types/goods'
import request from '@/utils/request'
import { defineStore } from 'pinia'

enum API {
  getGoodsInfo = '/goods',
}
export default defineStore('goods', {
  state: () => ({
    // 商品详细信息
    info: {} as GoodsInfo,
  }),
  actions: {
    async getGoodsInfo(id: string) {
      const res = await request.get<GoodsInfoResponse>(API.getGoodsInfo, {
        params: {
          id,
        },
      })
      this.info = res.data.result
    },
  },
})
