<!--
 * @Author: CHENJIE
<<<<<<< HEAD
 * @Date: 2022-11-09 10:44:40
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 14:27:37
 * @FilePath: \rabbit-ts-vue3.2\src\views\playground\index.vue
 * @Description:playground
-->
<script setup lang="ts" name="Playground">
import useMouse from '@/hooks/useMouse'
import useTimer  from '@/hooks/useTimer'
const { x, y } = useMouse()
const {count,stop,start} = useTimer(50,undefined,30,()=>{
console.log('count',count.value)
})
</script>
<template>
  <div class="playground">
    <h1 class="title">Playground</h1>
    <p>pageX:{{ x }}</p>
    <p>pageY:{{ y }}</p>
    <p>count:{{count}}</p>
    <button @click="stop">暂停倒计时</button>
    <button @click="start">开启倒计时</button>
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

