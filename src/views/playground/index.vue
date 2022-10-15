<!--
 * @Author: CHENJIE
 * @Date: 2022-10-15 12:37:13
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 14:23:29
 * @FilePath: \rabbit-ts-vue3\src\views\playground\index.vue
 * @Description:
-->
<script setup lang="ts" name="Playground">
import { VNode } from 'vue'

const activeName = ref('test1')
const tabs = [
  { label: 't1', name: 't2', value: 't3' },
  { label: 't22', name: 't22', value: 't32' },
  { label: 't222', name: 't222', value: 't222' },
]
const tabClick = (obj: { item: VNode; index: number }) => {
  console.log('obj', obj)
}
</script>
<template>
  <div>
    <XtxTabs v-model="activeName" @tab-click="tabClick">
      <XtxTabsPane label="s1" name="test1">我是1</XtxTabsPane>
      <XtxTabsPane
        v-for="item in tabs"
        :label="item.label"
        :name="item.name"
        :key="item.label"
        >{{ item.value }}</XtxTabsPane
      >
    </XtxTabs>
  </div>
</template>

<style scoped></style>
