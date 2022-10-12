<!--
 * @Author: CHENJIE
 * @Date: 2022-09-28 20:20:17
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:33:21
 * @FilePath: \rabbit-ts-vue3\src\views\goods\components\goods-image.vue
 * @Description:goods-image
-->
<script lang="ts" setup name="GoodsImage">
import { useMouseInElement } from '@vueuse/core'

interface Props {
  images: string[]
}
/**
 * layer 盒子宽高度
 */
const layerBox = 100
/**
 * 图片放大倍数
 */
const mulriple = 2
/**
 * 400 大盒子宽高 200 小盒子宽高
 * 可移动的距离
 */
const distance = 400 - 200
const props = defineProps<Props>()
const active = ref(0)
const target = ref<null | HTMLDivElement>(null)
const { isOutside, elementX, elementY } = useMouseInElement(target)
const position = computed(() => {
  let x: number = elementX.value - layerBox
  let y: number = elementY.value - layerBox
  if (x <= 0) x = 0
  if (x > distance) x = distance
  if (y <= 0) y = 0
  if (y > distance) y = distance
  return {
    x,
    y,
  }
})
</script>
<template>
  <div class="goods-image">
    <div
      v-show="!isOutside"
      class="cerlarge"
      :style="[
        { backgroundImage: `url(${props.images[active]})` },
        {
          backgroundPosition: `${-position.x * mulriple}px
            ${-position.y * mulriple}px`,
        },
      ]"
    />
    <div class="middle" ref="target">
      <div
        v-show="!isOutside"
        class="layer"
        :style="{ left: position.x + 'px', top: position.y + 'px' }"
      ></div>
      <img :src="props.images[active]" alt="" />
    </div>
    <ul class="small">
      <li
        v-for="(item, index) in props.images"
        :key="item"
        :class="{ active: active === index }"
        @mouseenter="active = index"
      >
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;
  .cerlarge {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;
    cursor: move;
    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, 0.2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
  .small {
    width: 80px;
    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;
      &:hover,
      &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>
