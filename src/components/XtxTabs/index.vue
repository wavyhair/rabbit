<!--
 * @Author: CHENJIE
 * @Date: 2022-10-15 12:47:55
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 14:22:16
 * @FilePath: \rabbit-ts-vue3\src\components\XtxTabs\index.vue
 * @Description:XtxTabs
-->
<script setup lang="tsx" name="XtxTabs">
import { VNode } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const { modelValue } = toRefs(props)
provide('tabName', modelValue)
interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'tab-click', value: { item: VNode; index: number }): void
}
const emits = defineEmits<Emits>()
const slots = useSlots()
const handleClick = (nav: VNode, index: number) => {
  emits('update:modelValue', nav.props?.name)
  emits('tab-click', { item: nav, index })
}
const Vnode = () => {
  const slotsArr: any[] = (slots as any)?.default?.()
  let panes: any[] = []
  slotsArr.forEach((item) => {
    if (item.type.name === 'XtxTabsPane') {
      panes.push(item)
    } else {
      // 处理 for 循环结点
      if (item.children.length) {
        item.children.forEach((panel: any) => {
          panes.push(panel)
        })
      }
    }
  })
  const navs = (
    <nav>
      {panes?.map((item, index) => {
        return (
          <a
            class={{ active: props.modelValue === item.props?.name }}
            href="javascript:;"
            onClick={() => handleClick(item, index)}
          >
            {item?.props?.label}
          </a>
        )
      })}
    </nav>
  )
  return <div class="xtx-tabs">{[navs, panes]}</div>
}
</script>

<template>
  <Vnode class="xtx-tabs">tabs</Vnode>
</template>

<style lang="less">
.xtx-tabs {
  background: #fff;
  > nav {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    > a {
      width: 110px;
      border-right: 1px solid #f5f5f5;
      text-align: center;
      font-size: 16px;
      &.active {
        border-top: 2px solid @xtxColor;
        height: 60px;
        background: #fff;
        line-height: 56px;
      }
    }
  }
}
</style>
