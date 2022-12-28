<!--
 * @Author: CHENJIE
 * @Date: 2022-12-28 09:59:25
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-12-28 10:05:46
 * @FilePath: \rabbit-ts-vue3.2\src\views\playground\components\defineExpose.vue
 * @Description:defineExpose
-->
<script setup lang="ts">
const msg = ref('msg')
const num = 0
defineExpose({ msg, num })
</script>
<template>
  <h2>defineExpose</h2>
</template>
