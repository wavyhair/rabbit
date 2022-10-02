<!--
 * @Author: CHENJIE
 * @Date: 2022-09-28 19:55:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-02 17:38:08
 * @FilePath: \rabbit-ts-vue3\src\views\goods\index.vue
 * @Description:goods
-->
<script lang="ts" name="Goods" setup>
import GoodsImage from './components/goods-image.vue'
import GoodsSales from './components/goods-sales.vue'
import GoodsName from './components/goods-name.vue'

import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import GoodsSku from './components/goods-sku.vue'

const { goods } = useStore()
const route = useRoute()
watchEffect(() => {
  const id = route.params.id as string
  if (route.fullPath === `/product/${id}`) {
    // 这里需要先清空 goodInfo 数据 ，因为 sku 组件是否渲染是根据 info 里面有没有数据决定的， 切换页面的时候 info 里面的数据没有被清空，再进来，会有导致有两份数据源，
    // 一份是之前的数据，一份是发请求获取的数据 ，而 setup 的方法只会在第一次渲染的时候执行，就会造成发请求回来的数据没有经过方法的处理就更新到页面，就会出现所有按钮都没禁用的异常行为。
    goods.$reset()
    goods.getGoodsInfo(id)
  }
})
const { info } = storeToRefs(goods)
const selChange = (skuId: string) => {
  const selSku = info.value.skus.find((sku) => sku.id === skuId)
  if (selSku) {
    info.value.inventory = selSku.inventory
    info.value.price = selSku.price
    info.value.oldPrice = selSku.oldPrice
  }
}
</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="info.categories">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${info.categories[1].id}`">
          {{ info.categories[1].name }}</XtxBreadItem
        >
        <XtxBreadItem :to="`/category/sub/${info.categories[0].id}`">{{
          info.categories[0].name
        }}</XtxBreadItem>
        <XtxBreadItem>{{ info.name }}</XtxBreadItem>
      </XtxBread>
      <XtxSkeleton
        v-else
        fade
        animated
        bg="#515151"
        :width="300"
        :height="24"
      />
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage v-if="info.mainPictures" :images="info.mainPictures" />
          <GoodsSales />
        </div>
        <div class="spec" v-if="info.id">
          <GoodsName :goods="info" />
          <GoodsSku :goods="info" @selChange="selChange" />
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
