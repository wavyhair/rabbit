<!--
 * @Author: CHENJIE
 * @Date: 2022-09-14 20:56:32
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 09:55:44
 * @FilePath: \rabbit-ts-vue3\src\views\home\components\home-hot.vue
 * @Description:home-hot
-->
<script lang="ts" setup name="HomeHot">
import { useLazyData } from '@/utils/hooks'
import useStore from '@/store'
import HomePanel from './home-panel.vue'
import HomeSkeleton from './home-skeleton.vue'
const { home } = useStore()
const target = useLazyData(home.getHotList)
</script>
<template>
  <div ref="target" class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <Transition name="fade">
        <ul v-if="home.hotGoodList.length > 0" ref="pannel" class="goods-list">
          <li v-for="item in home.hotGoodList" :key="item.id">
            <RouterLink to="/">
              <img v-lazy="item.picture" alt="" />
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
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
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
