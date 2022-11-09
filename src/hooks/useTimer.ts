/*
 * @Author: CHENJIE
 * @Date: 2022-11-09 13:21:08
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 14:21:42
 * @FilePath: \rabbit-ts-vue3.2\src\hooks\useTimer.ts
 * @Description:useTimer
 */
/**
 * @description:
 * @param {Number} second 倒计时秒数
 * @param {Number} interval 每隔多少秒执行
 * @param {Number} critical 临界值 定时器会在 second 大于临界值时执行
 * @param {function} cb 每次执行的回调
 *
 * @return {*} count 倒计时
 * @return {*} stop 倒计时停止
 * @return {*} start 倒计时开始
 *
 */
const useTimer = (
  second = 10,
  interval = 1000,
  critical = 0,
  cb?: () => void
) => {
  let timer: number
  const count = ref(second)
  const stop = () => {
    clearInterval(timer)
  }
  const start = () => {
    if (timer) clearInterval(timer)
    timer = window.setInterval(() => {
      if (count.value > critical) {
        count.value--
        cb && cb()
      }
    }, interval)
  }
  onUnmounted(() => {
    clearInterval(timer)
  })
  return { count, stop, start }
}
export default useTimer
