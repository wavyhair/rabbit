<!--
 * @Author: CHENJIE
 * @Date: 2022-10-13 22:10:50
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-13 22:10:56
 * @FilePath: \rabbit-ts-vue3\src\views\member\home\components\home-panel.vue
 * @Description:
-->
<script setup lang="ts">
interface Props {
  title: string
}
defineProps<Props>()
</script>

<template>
  <div class="home-panel">
    <div class="header">
      <h4>{{ title }}</h4>
      <XtxMore to="/" />
    </div>
    <!-- ๅๅๅ่กจ -->
    <div class="goods-list"></div>
  </div>
</template>

<style scoped lang="less">
.home-panel {
  background-color: #fff;
  padding: 0 20px;
  margin-top: 20px;
  height: 400px;
  .header {
    height: 66px;
    border-bottom: 1px solid #f5f5f5;
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h4 {
      font-size: 22px;
      font-weight: normal;
    }
  }
}
</style>
