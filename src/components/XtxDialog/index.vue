<!--
 * @Author: CHENJIE
 * @Date: 2022-10-11 19:48:27
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:32:35
 * @FilePath: \rabbit-ts-vue3\src\components\XtxDialog\index.vue
 * @Description:XtxDialog
-->
<script lang="ts" setup name="XtxDialog">
import { onClickOutside } from '@vueuse/core'
const props = defineProps({
  title: {
    type: String,
  },
  modelValue: {
    type: Boolean,
  },
})
interface Emits {
  (e: 'update:modelValue', modelValue: boolean): void
}
const emits = defineEmits<Emits>()
// 控制动画
const show = ref(false)
watch(
  () => props.modelValue,
  (value) => {
    setTimeout(() => {
      show.value = value
    }, 20)
  },
  {
    immediate: true,
  }
)
const target = ref<null | HTMLDivElement>(null)
const close = () => {
  emits('update:modelValue', false)
}
onClickOutside(target, () => {
  close()
})
</script>
<template>
  <div class="xtx-dialog" v-if="modelValue" :class="{ fade: show }">
    <div ref="target" class="wrapper" :class="{ fade: show }">
      <div class="header">
        <h3>{{ title }}</h3>
        <a
          href="JavaScript:;"
          class="iconfont icon-close-new"
          @click="close"
        ></a>
      </div>
      <div class="body"><slot /></div>
      <div class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  // background: rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 600px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(-50%, -50%);
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .body {
      padding: 20px 40px;
      font-size: 16px;
      .icon-warning {
        color: @priceColor;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .footer {
      text-align: center;
      padding: 10px 0 30px 0;
    }
    .header {
      position: relative;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 24px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
