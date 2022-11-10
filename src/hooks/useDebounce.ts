import { onMounted, onUnmounted } from 'vue'

/*
 * @Author: CHENJIE
 * @Date: 2022-11-10 09:29:42
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-10 13:27:16
 * @FilePath: \rabbit-ts-vue3.2\src\hooks\useDebounce.ts
 * @Description:防抖函数
 */
/**
 * 当事件触发时，相应的函数不会被立即触发，而是会被推迟执行。
 * 当事件连续密集触发时，函数的触发会被一直推迟。
 * 只有当等待一段时间后也没有再次触发该事件，那么才会真正执行响应函数。
 * 简而言之，防抖就是将函数的执行延迟一定时间，如果在该时间内重新触发事件，那么延迟的时间会重置，只有真正达到延迟时间，才会执行回调函数
 */

let timer: number = 0
/**
 * @description: 防抖函数
 * @param {*} interval 延迟毫秒数 默认 2000
 * @param {function} cb 回调函数
 * @return {*}
 */
const useDebounce = (interval = 2000, cb: () => void) => {
  if (typeof cb !== 'function') {
    throw Error('cb is not a function')
  }
  if (timer) clearTimeout(timer)
  timer = window.setTimeout(() => {
    cb()
  }, interval)
}
export default useDebounce
