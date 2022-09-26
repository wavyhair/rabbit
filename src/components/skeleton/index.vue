<!--
 * @Author: CHENJIE
 * @Date: 2022-09-11 19:49:41
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-26 19:27:03
 * @FilePath: \rabbit-ts-vue3\src\components\skeleton\index.vue
 * @Description: 骨架屏
-->
<script lang="ts" setup name="XtxSkeleton">
defineProps({
  bg: {
    type: String,
    default: '#efefef',
  },
  width: {
    type: Number,
    // required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  animated: {
    type: Boolean,
    default: false,
  },
  fade: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="xtx-skeleton"
    :style="{ width: width ? width + 'px' : '100%', height: height + 'px' }"
    :class="{ shan: animated, fade: fade }"
  >
    <!-- 1 盒子-->
    <div class="block" :style="{ backgroundColor: bg }"></div>
    <!-- 2 闪效果 xtx-skeleton 伪元素 --->
  </div>
</template>

<style scoped lang="less">
.xtx-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: '';
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}

.fade {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
