<!--
 * @Author: CHENJIE
 * @Date: 2022-10-15 12:48:18
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 14:00:11
 * @FilePath: \rabbit-ts-vue3\src\components\XtxTabsPane\index.vue
 * @Description:XtxTabsPane
-->
<script setup lang="ts" name="XtxTabsPane">
const tabName = inject('tabName')
defineProps<{
  label?: string
  name?: string
}>()
</script>

<template>
  <div class="xtx-tabs-panel" v-show="tabName === name">
    <slot></slot>
  </div>
</template>
