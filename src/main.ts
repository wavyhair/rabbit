/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: chenjie
 * @LastEditTime: 2022-09-07 13:33:45
 * @FilePath: /src/main.ts
 * @Description:main
 */
import { createApp } from 'vue'
import 'normalize.css' // 通用样式 浏览器表现是一致的
import '@/assets/styles/common.less' // 项目通用样式
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
