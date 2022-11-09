import { onMounted, onUnmounted } from 'vue'

/*
 * @Author: CHENJIE
 * @Date: 2022-11-09 10:53:50
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 14:26:17
 * @FilePath: \rabbit-ts-vue3.2\src\hooks\useEventListener.ts
 * @Description:useEventListener
 */

/**
 * @description: 组件挂载监听事件 组件卸载移除事件
 * @param {Params} params 监听目标 事件名 回调函数
 * @return {*}
 */
const useEventListener = (
  target: Window | HTMLElement,
  event: string,
  cb: (e: any) => void
) => {
  onMounted(() => {
    target.addEventListener(event, cb)
  })
  onUnmounted(() => {
    target.removeEventListener(event, cb)
  })
}
export default useEventListener
