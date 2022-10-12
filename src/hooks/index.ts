/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 22:44:27
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 12:40:38
 * @FilePath: \rabbit-ts-vue3\src\hooks\index.ts
 * @Description:自定义 hooks
 */
import { useIntervalFn } from '@vueuse/core'

/**
 * 封装一个倒计时功能
 */
export function useCountDown(count = 60) {
  const time = ref(0)
  const { pause, resume } = useIntervalFn(() => {
    time.value--
    if (time.value <= 0) pause()
  }, 1000)
  const start = () => {
    time.value = count
    resume()
  }
  return { start, time }
}
