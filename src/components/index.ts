/*
 * @Author: CHENJIE
 * @Date: 2022-09-11 19:38:24
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 12:51:44
 * @FilePath: \rabbit-ts-vue3\src\components\index.ts
 * @Description:全局组件注册
 */
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarouse from '@/components/carouse/index.vue'
import XtxMore from '@/components/more/index.vue'
import Bread from '@/components/bread/index.vue'
import BreadItem from '@/components/bread/item.vue'
import XtxCity from '@/components/city/index.vue'
import XtxNumber from '@/components/XtxNumber/index.vue'
import XtxButton from '@/components/XtxButton/index.vue'
import XtxCheckBox from '@/components/XtxCheckBox/index.vue'
import XtxMessage from '@/components/XtxMessage/index.vue'
import XtxConfirm from './XtxConfirm/confirm.vue'
import XtxDialog from './XtxDialog/index.vue'
import XtxSwitch from './switch/index.vue'
import XtxTabs from './XtxTabs/index.vue'
import XtxTabsPane from './XtxTabsPane/index.vue'

import { App } from 'vue'

export default {
  install(app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarouse', XtxCarouse)
    app.component('XtxMore', XtxMore)
    app.component('XtxBread', Bread)
    app.component('XtxBreadItem', BreadItem)
    app.component('XtxCity', XtxCity)
    app.component('XtxNumber', XtxNumber)
    app.component('XtxButton', XtxButton)
    app.component('XtxCheckBox', XtxCheckBox)
    app.component('XtxMessage', XtxMessage)
    app.component('XtxConfirm', XtxConfirm)
    app.component('XtxDialog', XtxDialog)
    app.component('XtxSwitch', XtxSwitch)
    app.component('XtxTabs', XtxTabs)
    app.component('XtxTabsPane', XtxTabsPane)
  },
}
