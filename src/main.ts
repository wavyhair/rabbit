/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-06 20:26:41
 * @FilePath: \rabbit-ts-vue3\src\main.ts
 * @Description:main
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
