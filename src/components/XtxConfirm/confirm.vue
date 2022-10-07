<!--
 * @Author: CHENJIE
 * @Date: 2022-10-07 12:18:11
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 13:06:08
 * @FilePath: \rabbit-ts-vue3\src\components\XtxConfirm\confirm.vue
 * @Description:confirm
-->
<script lang="ts" setup name="XtxConfirm">
import XtxButton from '@/components/XtxButton/index.vue'
import { onMounted, PropType, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  confirmCallback: {
    type: Function as PropType<() => void>,
  },
  cancelCallback: {
    type: Function as PropType<() => void>,
  },
})
const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 20)
})
</script>
<template>
  <div class="xtx-confirm" :class="{ fade: show }">
    <div class="wrapper" :class="{ fade: show }">
      <div class="header">
        <h3>{{ title ? title : '温馨提示' }}</h3>
        <a
          href="JavaScript:;"
          class="iconfont icon-close-new"
          @click="props.cancelCallback"
        ></a>
      </div>
      <div class="body">
        <i class="iconfont icon-warning"></i>
        <span>{{ text }}</span>
      </div>
      <div class="footer">
        <XtxButton size="mini" type="gray" @click="props.cancelCallback"
          >取消</XtxButton
        >
        <XtxButton size="mini" type="primary" @click="props.confirmCallback"
          >确认</XtxButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .header,
    .footer {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
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
      text-align: right;
      .xtx-button {
        margin-left: 20px;
      }
    }
    .header {
      position: relative;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 20px;
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
