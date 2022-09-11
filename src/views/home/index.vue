<!--
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:56:49
 * @LastEditors: jiea
 * @LastEditTime: 2022-09-11 16:24:42
 * @FilePath: \rabbit-ts-vue3\src\views\home\index.vue
 * @Description: home
-->

<script lang="ts" setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
</script>
<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>
<style></style>
