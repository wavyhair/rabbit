<!--
 * @Autor:jiea
 * @Date: 2022-09-11 16:22
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 16:33:48
 * @FilePath: \rabbit-ts-vue3\src\views\home\components\home-banner.vue
 * @Description: 首页 banner
-->
<script lang="ts" setup name="HomeBanner">
import useStore from '@/store'
const { home } = useStore()
home.getSlides()
</script>

<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarouse
      v-if="home.slides.length"
      :slides="home.slides"
      auto-play
      :duration="3000"
    />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  :deep(.carousel-btn.prev) {
    left: 270px !important;
  }
  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
