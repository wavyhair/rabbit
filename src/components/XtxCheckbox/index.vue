<!--
 * @Author: CHENJIE
 * @Date: 2022-10-03 11:25:59
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-03 11:56:06
 * @FilePath: \rabbit-ts-vue3\src\components\XtxCheckbox\index.vue
 * @Description:复选框组件
-->
<script lang="ts" setup name="XtxCheckbox">
import { emit } from 'process'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}
const emits = defineEmits<Emits>()
const change = () => {
  emits('update:modelValue', !props.modelValue)
  emits('change', !props.modelValue)
}
</script>

<template>
  <div class="xtx-checkbox" @click="change">
    <i v-if="modelValue" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
