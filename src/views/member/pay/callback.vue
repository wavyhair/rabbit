<!--
 * @Author: CHENJIE
 * @Date: 2022-10-12 19:30:00
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-13 20:31:02
 * @FilePath: \rabbit-ts-vue3\src\views\member\pay\callback.vue
 * @Description:
-->
<script setup lang="ts">
import type { Order, OrderResponse } from '@/types/pay'
import request from '@/utils/request'

const route = useRoute()
const payResult = route.query.payResult === 'true'
const order = ref<Order>({} as Order)
onMounted(async () => {
  // 根据订单id获取订单详情
  const res = await request.get<OrderResponse>(
    `/member/order/${route.query.orderId}`
  )
  order.value = res.data.result
  console.log('order.value ', order.value)
})
</script>

<template>
  <div class="xtx-pay-page">
    <div class="container">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem to="/cart">购物车</XtxBreadItem>
        <XtxBreadItem>支付结果</XtxBreadItem>
      </XtxBread>
      <!-- 支付结果 -->
      <div class="pay-result">
        <span v-if="payResult" class="iconfont icon-queren2 green"></span>
        <span v-else class="iconfont icon-shanchu red"></span>
        <p class="tit">{{ payResult ? '订单支付成功' : '订单支付失败' }}</p>
        <p class="tip">我们将尽快为您发货，收货期间请保持手机畅通</p>
        <p>支付方式：<span>支付宝支付</span></p>
        <p>
          支付金额：<span>{{ order.payMoney }}元</span>
        </p>
        <div class="btn">
          <XtxButton type="primary" style="margin-right: 20px">
            查看订单
          </XtxButton>
          <XtxButton type="gray" @click="$router.replace('/')"
            >进入首页</XtxButton
          >
        </div>
        <p class="alert">
          <span class="iconfont icon-tip"></span>
          温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  > .iconfont {
    font-size: 100px;
  }
  .green {
    color: #1dc779;
  }
  .red {
    color: @priceColor;
  }
  .tit {
    font-size: 24px;
  }
  .tip {
    color: #999;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  .btn {
    margin-top: 50px;
  }
  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>
