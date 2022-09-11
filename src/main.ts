/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-11 19:47:45
 * @FilePath: \rabbit-ts-vue3\src\main.ts
 * @Description:main
 */
import { createApp } from 'vue'
import 'normalize.css' // 通用样式 浏览器表现是一致的
import '@/assets/styles/common.less' // 项目通用样式
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import XtxUi from './components' // 全局组件

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(XtxUi)
app.mount('#app')
