<!--
 * @Author: CHENJIE
 * @Date: 2022-10-13 21:06:39
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-13 21:26:14
 * @FilePath: \rabbit-ts-vue3\src\views\member\layout\index.vue
 * @Description:
-->
<script setup lang="ts">
//
</script>

<template>
  <div>
    <div class="container">
      <MemberAside />
      <div class="article">
        <!-- 三级路由的出口 -->
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  display: flex;
  padding-top: 20px;
  .article {
    width: 1000px;
  }
}
</style>
