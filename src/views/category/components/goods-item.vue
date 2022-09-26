<!--
 * @Author: CHENJIE
 * @Date: 2022-09-26 19:54:21
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-26 22:35:56
 * @FilePath: \rabbit-ts-vue3\src\views\category\components\goods-item.vue
 * @Description:goods-item
-->

<script lang="ts" setup name="GoodsItem">
import { GoodItem } from '@/types/data'

interface Props {
  goods: GoodItem
}
const props = defineProps<Props>()
</script>
<template>
  <RouterLink to="/" class="goods-item">
    <img v-lazy="props.goods.picture" alt="" />
    <p class="name ellipsis">{{ props.goods.name }}</p>
    <p class="desc ellipsis">{{ props.goods.desc }}</p>
    <p class="price">&yen;{{ props.goods.price }}</p>
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
