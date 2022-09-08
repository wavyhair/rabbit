<!--
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:13:29
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-08 20:20:54
 * @FilePath: \rabbit-ts-vue3\src\views\layout\index.vue
 * @Description: layout
-->
<script setup lang="ts" name="Layout">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
import AppHeaderSticky from './components/app-header-sticky.vue'
</script>
<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderSticky />
  <main class="app-body">
    <!-- 出口 -->
    <RouterView />
  </main>

  <AppFooter />
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
