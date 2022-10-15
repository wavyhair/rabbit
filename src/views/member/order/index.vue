<!--
 * @Author: CHENJIE
 * @Date: 2022-10-13 21:48:53
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 14:36:07
 * @FilePath: \rabbit-ts-vue3\src\views\member\order\index.vue
 * @Description:order
-->
<script setup lang="ts">
import request from '@/utils/request'
import { ref, VNode, watch } from 'vue'
import OrderItem from './components/order-item.vue'
import { OrderListInfo, OrderListInfoRes } from '@/types/pay'
// 订单状态
const orderStatus = [
  { name: 'all', label: '全部订单' },
  { name: 'unpay', label: '待付款' },
  { name: 'deliver', label: '待发货' },
  { name: 'receive', label: '待收货' },
  { name: 'comment', label: '待评价' },
  { name: 'complete', label: '已完成' },
  { name: 'cancel', label: '已取消' },
]

const activeName = ref('all')

const orderState = ref(0)

const change = (obj: { item: VNode; index: number }) => {
  orderState.value = obj.index
}

const orderList = ref<OrderListInfo>({} as OrderListInfo)
watch(
  orderState,
  async (value) => {
    const res = await request.get<OrderListInfoRes>('/member/order', {
      params: {
        orderState: value,
      },
    })
    orderList.value = res.data.result
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div class="member-order">
    <XtxTabs v-model="activeName" @tab-click="change">
      <XtxTabsPane
        v-for="item in orderStatus"
        :key="item.name"
        :name="item.name"
        :label="item.label"
      >
        <div class="order-list">
          <OrderItem
            v-for="item in orderList.items"
            :key="item.id"
            :order="item"
          />
        </div>
      </XtxTabsPane>
    </XtxTabs>
  </div>
</template>

<style scoped lang="less">
.order-list {
  background-color: #fff;
  padding: 20px;
}
</style>
