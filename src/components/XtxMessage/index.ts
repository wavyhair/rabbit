/*
 * @Author: CHENJIE
 * @Date: 2022-10-03 14:53:47
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-03 17:16:54
 * @FilePath: \rabbit-ts-vue3\src\components\XtxMessage\index.ts
 * @Description:XtxMessage
 */
import { h, render } from 'vue'
import XtxMessage from './index.vue'
const div = document.createElement('div')
document.body.appendChild(div)
div.setAttribute('class', 'xtx-message-container')
interface Props {
  type: 'success' | 'error' | 'warning'
  text: string
  duration: number
}
export default function Message({ type, text, duration = 1000 }: Props) {
  // h 等价于 createVNode
  // createVNode: 作用：创建虚拟DOM  (一个js对象, 可以模拟真实dom结构)
  // h 参数1：创建的虚拟DOM的节点类型  比如  div h1  a  img
  // h 参数2：虚拟DOM拥有的属性，是一个对象
  // h 参数3：虚拟DOM节点的内容

  // <h1 title="标题" id="box" class="aa">我是标题</h1>
  const vNode = h(XtxMessage, { type, text })
  render(vNode, div)
  // render 参数1：虚拟DOM
  // render 参数2：真实的DOM，，，虚拟DOM的挂载点
  setTimeout(() => {
    render(null, div)
  }, duration)
}
Message.success = function (text: string, duration?: number) {
  Message({ type: 'success', text, duration: duration ? duration : 2000 })
}
Message.error = function (text: string, duration?: number) {
  Message({ type: 'error', text, duration: duration ? duration : 2000 })
}
Message.warning = function (text: string, duration?: number) {
  Message({ type: 'warning', text, duration: duration ? duration : 2000 })
}
