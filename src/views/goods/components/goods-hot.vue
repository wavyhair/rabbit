<!--
 * @Author: CHENJIE
 * @Date: 2022-10-02 21:11:28
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-02 22:14:54
 * @FilePath: \rabbit-ts-vue3\src\views\goods\components\goods-hot.vue
 * @Description:热榜
-->
<script setup lang="ts">
import request from '@/utils/request'
import { GoodItem, GoodItemResponse } from '@/types/data'
import GoodsItem from '@/views/category/components/goods-item.vue'
import { onMounted, PropType, ref } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps({
  type: {
    type: Number as PropType<1 | 2 | 3>,
    default: 1,
  },
})

// 标题对象
const titleObj = {
  1: '24小时热销榜',
  2: '周热销榜',
  3: '总热销榜',
}
const API_URL = '/goods/hot'
// 发送请求获取数据
const route = useRoute()
const id = route.params.id as string
const list = ref<GoodItem[]>([])
onMounted(async () => {
  const res = await request.get<GoodItemResponse>(API_URL, {
    params: {
      id,
      type: props.type,
    },
  })
  list.value = res.data.result
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{ titleObj[props.type] }}</h3>
    <div class="goods-list">
      <!-- 商品区块 -->
      <GoodsItem v-for="(item, index) in list" :goods="item" :key="index" />
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-hot {
  background-color: #fff;
  margin-bottom: 20px;
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
