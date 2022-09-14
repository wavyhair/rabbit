<!--
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:56:49
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-14 20:58:43
 * @FilePath: \rabbit-ts-vue3\src\views\home\index.vue
 * @Description: home
-->

<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
</script>
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
      </div>
    </div>
  </div>
</template>
<style></style>
