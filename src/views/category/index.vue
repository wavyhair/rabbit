<!--
 * @Author: CHENJIE
 * @Date: 2022-09-07 20:00:34
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-25 22:12:24
 * @FilePath: \rabbit-ts-vue3\src\views\category\index.vue
 * @Description: category
-->

<script lang="ts" name="TopCategory" setup>
import useStore from '@/store'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const { category } = useStore()
const route = useRoute()
watchEffect(() => {
  const id = route.params.id
  if (route.fullPath === `/category/${id}`) {
    category.getTopCategory(route.params.id as string)
  }
})
console.log('category.topCategory', category.topCategory)
</script>
<template>
  <div class="category">
    <XtxBread v-if="category.topCategory.id">
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/catagory/${category.topCategory.id}`">{{
        category.topCategory.name
      }}</XtxBreadItem>
    </XtxBread>
    <XtxSkeleton v-else fade animated bg="#515151" :width="100" :height="24" />
  </div>
</template>
<style></style>
