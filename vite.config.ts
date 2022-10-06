/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 18:43:15
 * @FilePath: \rabbit-ts-vue3\vite.config.ts
 * @Description: vite.config
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 如果提供的默认值需要在模板中渲染，需要额外添加配置
      reactivityTransform: true,
    }),
    vueSetupExtend(),
  ],
  base: '/rabbit-ts-vue3.2/',
  server: {
    // QQ三方登录的回调uri为：http://www.corho.com:8080/#/login/callback
    // vite 中配置： www.corho.com:8080
    host: 'www.corho.com',
    port: 8080,
    open: true,
    cors: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
           @import "@/assets/styles/variables.less";
           @import "@/assets/styles/mixins.less";
      `,
      },
    },
  },
})
