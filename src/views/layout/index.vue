<!--
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:13:29
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-06 20:38:03
 * @FilePath: \rabbit-ts-vue3\src\views\layout\index.vue
 * @Description: layout
-->
<script setup lang="ts" name="Layout">
import { ref } from 'vue'

const count = ref(1)
</script>
<template>
  <div>layout组件{{ count }}</div>
</template>

<style scoped></style>
