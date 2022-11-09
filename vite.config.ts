/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-15 13:23:13
 * @FilePath: \rabbit-ts-vue3\vite.config.ts
 * @Description: vite.config
 */
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

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
    vueJsx({}),
    Components({
      dirs: ['src/components', 'src/views'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
    }),
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
