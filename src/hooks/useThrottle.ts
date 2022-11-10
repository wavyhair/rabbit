/*
 * @Author: CHENJIE
 * @Date: 2022-11-10 13:45:28
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-10 13:50:20
 * @FilePath: \rabbit-ts-vue3.2\src\hooks\useThrottle.ts
 * @Description:节流 n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
 */
let flag = true
/**
 * @description:
 * @param {*} interval 延迟毫秒数 默认 2000
 * @param {function} cb 回调函数
 * @return {*}
 */
const useThrottle = (interval = 2000, cb: () => void) => {
  if (flag) {
    flag = false
    window.setTimeout(() => {
      cb && cb()
      flag = true
    }, interval)
  }
}
export default useThrottle
