<!--
 * @Author: CHENJIE
 * @Date: 2022-09-26 19:54:21
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 09:58:43
 * @FilePath: \rabbit-ts-vue3\src\views\category\components\goods-item.vue
 * @Description:goods-item
-->

<script lang="ts" setup name="GoodsItem">
import { GoodItem } from '@/types/data'
import { PropType } from 'vue'

defineProps({
  goods: {
    type: Object as PropType<GoodItem>,
    default: () => {
      return {}
    },
  },
})
</script>
<template>
  <RouterLink :to="`/product/${goods.id}`" class="goods-item">
    <img v-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>
<style scoped lang="less">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();
  img {
    width: 160px;
    height: 160px;
  }
  p {
    padding-top: 10px;
  }
  .name {
    font-size: 16px;
  }
  .desc {
    color: #999;
    height: 29px;
  }
  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>
