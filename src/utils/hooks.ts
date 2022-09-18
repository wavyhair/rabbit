/*
 * @Author: CHENJIE
 * @Date: 2022-09-17 19:17:53
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-18 17:38:19
 * @FilePath: \rabbit-ts-vue3\src\utils\hooks.ts
 * @Description:hooks
 */
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

// 数据懒加载 api
export const useLazyData = (apiFn: () => void) => {
  const target = ref(null)
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stop()
        apiFn()
      }
    },
    {
      threshold: 0,
    }
  )
  return target
}
