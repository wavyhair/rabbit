/*
 * @Author: CHENJIE
 * @Date: 2022-10-07 12:20:50
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 12:58:51
 * @FilePath: \rabbit-ts-vue3\src\components\XtxConfirm\index.ts
 * @Description:confirm.js
 */
import { h, render } from 'vue'
import XtxConfirm from './confirm.vue'

interface Props {
  title?: string
  text: string
}
const div = document.createElement('div')
div.setAttribute('class', 'xtx-confirm-container')
document.body.appendChild(div)
export default function Confirm({ text, title }: Props) {
  return new Promise((resolve, reject) => {
    const confirmCallback = () => {
      render(null, div)
      resolve(undefined)
    }
    const cancelCallback = () => {
      render(null, div)
      reject('cancel')
    }
    const vNode = h(XtxConfirm, {
      text,
      title,
      confirmCallback,
      cancelCallback,
    })
    render(vNode, div)
  })
}
