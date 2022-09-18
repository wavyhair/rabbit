<!--
 * @Author: CHENJIE
 * @Date: 2022-09-14 20:38:28
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-18 15:38:24
 * @FilePath: \rabbit-ts-vue3\src\views\home\components\home-new.vue
 * @Description:home-new
-->
<script lang="ts" setup name="HomeNew">
import { useLazyData } from '@/utils/hooks'
import HomePanel from './home-panel.vue'
import useStore from '@/store'
import HomeSkeleton from './home-skeleton.vue'
const { home } = useStore()
const target = useLazyData(home.getNewList)
</script>
<template>
  <div ref="target" class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <!-- 面板内容 -->
      <Transition name="fade">
        <ul v-if="home.newGoodList.length > 0" class="goods-list">
          <li v-for="item in home.newGoodList" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img v-lazy="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton v-else />
      </Transition>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
