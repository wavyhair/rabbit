<!--
 * @Author: CHENJIE
 * @Date: 2022-10-02 19:56:15
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-02 20:43:51
 * @FilePath: \rabbit-ts-vue3\src\components\XtxNumbox\index.vue
 * @Description:
-->
<script lang="ts" setup name="XtxNumbox">
const props = defineProps({
  count: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 20,
  },
  showLabel: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '数量',
  },
})
interface Emits {
  (e: 'update:count', value: number): void
}
const emits = defineEmits<Emits>()
const increment = () => {
  if (props.count >= props.max) return
  emits('update:count', props.count + 1)
}
const decrement = () => {
  if (props.count <= props.min) return
  emits('update:count', props.count - 1)
}
</script>
<template>
  <div class="xtx-numbox">
    <div v-if="showLabel" class="label">
      <slot>{{ label }}</slot>
    </div>
    <div class="numbox">
      <a href="javascript:;" @click="decrement">-</a>
      <input type="text" readonly :value="count" />
      <a href="javascript:;" @click="increment">+</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>
