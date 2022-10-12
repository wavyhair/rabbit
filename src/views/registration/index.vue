<!--
 * @Author: CHENJIE
 * @Date: 2022-10-05 21:42:53
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:27:48
 * @FilePath: \rabbit-ts-vue3\src\views\registration\index.vue
 * @Description:
-->
<script setup lang="ts" name="Registration">
const router = useRouter()
const visible = ref(true)
</script>
<template>
  <XtxDialog title="你好" v-model="visible">
    <h1>默认插槽数据</h1>
    <template #fotter>
      <XtxButton type="gray" style="margin-right: 20px" @click="visible = false"
        >取消</XtxButton
      >
      <XtxButton type="primary">确认</XtxButton>
    </template>
  </XtxDialog>
  <h1>吗的懒得写了</h1>
  <XtxButton @click="router.push('/')">去首页</XtxButton>
</template>

<style scoped></style>
