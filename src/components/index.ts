/*
 * @Author: CHENJIE
 * @Date: 2022-09-11 19:38:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 15:42:57
 * @FilePath: \rabbit-ts-vue3\src\components\index.ts
 * @Description:全局组件注册
 */
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarouse from '@/components/carouse/index.vue'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarouse', XtxCarouse)
  },
}
