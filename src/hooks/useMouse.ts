import { ref } from 'vue'
import useEventListener from './useEventListener'

/*
 * @Author: CHENJIE
 * @Date: 2022-11-09 11:29:45
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 14:27:28
 * @FilePath: \rabbit-ts-vue3.2\src\hooks\useMouse.ts
 * @Description:useMouse
 */
/**
 * @description: 鼠标移动事件
 * @return {*} x：x坐标
 * @return {*} y：y坐标
 */
const useMouse = () => {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', (event: MouseEvent) => {
    ;(x.value = event.pageX), (y.value = event.pageY)
  })
  return { x, y }
}
export default useMouse
