<!--
 * @Author: CHENJIE
 * @Date: 2022-09-12 11:16:48
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 16:28:22
 * @FilePath: \rabbit-ts-vue3\src\components\carouse\index.vue
 * @Description:carouse
-->
<script lang="ts" setup name="XtxCarousel">
import { SlidesItem } from '@/types/data'
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  slides: SlidesItem[]
  autoPlay: boolean
  duration: number
}

const props = defineProps<Props>()
// 控制高亮
const active = ref(0)
const prev = () => {
  active.value = active.value <= 0 ? props.slides.length - 1 : active.value - 1
}
const next = () => {
  active.value = active.value >= props.slides.length - 1 ? 0 : active.value + 1
}
let timer = -1
const play = () => {
  if (!props.autoPlay) return
  timer = window.setInterval(() => {
    next()
  }, props.duration)
}
const stop = () => {
  clearInterval(timer)
}
onMounted(() => {
  play()
})
onUnmounted(() => {
  stop()
})
</script>
<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="play">
    <!-- 图片部分 -->
    <ul class="carousel-body">
      <li
        v-for="(item, index) in props.slides"
        :class="{ fade: active === index }"
        class="carousel-item"
        :key="item.id"
      >
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <!-- 左边按钮 -->
    <a href="javascript:;" class="carousel-btn prev" @click="prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <!-- 右边按钮 -->
    <a href="javascript:;" class="carousel-btn next" @click="next">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <!-- 底部圆点 -->
    <div class="carousel-indicator">
      <span
        v-for="(item, index) in props.slides"
        :key="item.id"
        :class="{ active: active === index }"
        @click="active = index"
      ></span>
    </div>
  </div>
</template>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
