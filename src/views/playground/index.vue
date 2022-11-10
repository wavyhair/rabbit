<!--
 * @Author: CHENJIE
<<<<<<< HEAD
 * @Date: 2022-11-09 10:44:40
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-10 13:14:31
 * @FilePath: \rabbit-ts-vue3.2\src\views\playground\index.vue
 * @Description:playground
-->
<script setup lang="ts" name="Playground">
import useDebounce from '@/hooks/useDebounce';
import useMouse from '@/hooks/useMouse'
import useTimer from '@/hooks/useTimer'
import { useDebounceFn } from '@vueuse/core';
import { TransitionGroup } from 'vue'
const { x, y } = useMouse()
const { count, stop, start } = useTimer(50, undefined, 30, () => {
  console.log('count', count.value)
})
let items = reactive({ arr: ['安琪拉', '哥斯拉', 'React', '芈月'] })
const itemAdd = () => {
  items.arr.push(Math.random().toFixed(2))
}
const itemDel = () => {
  items.arr = items.arr.slice(0, -1)
  console.log('items', items)
}
const handleDebounce = () => useDebounce(undefined, () => {
  alert('2')
})
</script>
<template>
  <div class="playground">
    <h1 class="title">Playground</h1>
    <p>pageX:{{ x }}</p>
    <p>pageY:{{ y }}</p>
    <p>count:{{ count }}</p>
    <button @click="stop">暂停倒计时</button>
    <button @click="start">开启倒计时</button>
    <button @click="itemDel" :disabled="!items.arr.length">itemDel</button>
    <button @click="itemAdd">itemsAdd</button>
    <button @click="handleDebounce">useDebounce</button>
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in items.arr" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style lang="less" scoped>
.playground {
  font-size: 76px;
  height: 1080px;
  background-color: #1a1a1a;

  button {
    padding: 3px 15px;
    background-color: #33a06f;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    outline: none;
    color: #fff;
    margin: 1rem .3rem;
    border-bottom: 2px solid rgb(15, 1, 1);
    text-shadow: 1px 1px 1px #aa9999;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    vertical-align: middle;

    &:hover {
      background-color: #029946;
    }
  }

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

  .list-move,
  /* 对移动中的元素应用的过渡 */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
  .list-leave-active {
    position: absolute;
  }
}
</style>
