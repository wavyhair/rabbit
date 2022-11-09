<!--
 * @Author: CHENJIE
<<<<<<< HEAD
 * @Date: 2022-11-09 10:44:40
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 11:39:58
 * @FilePath: \rabbit-ts-vue3.2\src\views\playground\index.vue
 * @Description:playground
-->
<script setup lang="ts" name="Playground">
import { useMouse } from '@/hooks/useMouse'
const { x, y } = useMouse()
</script>
<template>
  <div class="playground">
    <h1 class="title">Playground</h1>
    <p>pageX:{{ x }}</p>
    <p>pageY:{{ y }}</p>
  </div>
</template>

<style lang="less" scoped>
.playground {
  font-size: 76px;
  height: 1080px;
  background-color: #1a1a1a;
  .title {
    text-align: center;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: border-box;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: #42d392;
  }
}
</style>

