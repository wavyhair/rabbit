<!--
 * @Author: CHENJIE
 * @Date: 2022-09-18 15:55:56
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-18 16:25:03
 * @FilePath: \rabbit-ts-vue3\src\views\home\components\home-brand.vue
 * @Description:ome-brand
-->
<script lang="ts" setup name="HomeBrand">
import { useLazyData } from '@/utils/hooks'
import HomePanel from './home-panel.vue'
import useStore from '@/store'
import { ref } from 'vue'
const { home } = useStore()
const target = useLazyData(home.getBrandList)
const index = ref(0)
const prev = () => {
  if (index.value === 0) return
  index.value -= 1
}
const next = () => {
  if (index.value === Math.ceil(home.brandList.length) / 5 - 1) return
  index.value += 1
}
</script>

<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a
        href="javascript:;"
        class="iconfont icon-angle-left prev"
        :class="{ disabled: index === 0 }"
        @click="prev"
      ></a>
      <a
        href="javascript:;"
        class="iconfont icon-angle-right next"
        :class="{ disabled: index === home.brandList.length / 5 - 1 }"
        @click="next"
      ></a>
    </template>
    <div ref="target" class="box">
      <Transition name="fade">
        <ul
          v-if="home.brandList.length > 0"
          class="list"
          :style="{ transform: `translateX(${-index * 1240}px)` }"
        >
          <li v-for="item in home.brandList" :key="item.id">
            <RouterLink to="/">
              <img v-lazy="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton">
          <XtxSkeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            :width="240"
            :height="305"
          />
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      .hoverShadow();

      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
  .skeleton {
    width: 100%;
    display: flex;
    .item {
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
