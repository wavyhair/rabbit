/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 10:54:47
 * @FilePath: \rabbit-ts-vue3\src\main.ts
 * @Description:main
 */
import { createApp } from 'vue'
import 'normalize.css' // 通用样式 浏览器表现是一致的
import '@/assets/styles/common.less' // 项目通用样式
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'
import XtxUi from './components' // 全局组件
import directives from './directives' // 自定义指令

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(router)
app.use(pinia)
app.use(XtxUi)
app.use(directives)
app.mount('#app')
