/*
 * @Author: CHENJIE
 * @Date: 2022-09-11 19:38:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-25 21:35:28
 * @FilePath: \rabbit-ts-vue3\src\components\index.ts
 * @Description:全局组件注册
 */
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarouse from '@/components/carouse/index.vue'
import XtxMore from '@/components/more/index.vue'
import Bread from '@/components/bread/index.vue'
import BreadItem from '@/components/bread/item.vue'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarouse', XtxCarouse)
    app.component('XtxMore', XtxMore)
    app.component('XtxBread', Bread)
    app.component('XtxBreadItem', BreadItem)
  },
}
