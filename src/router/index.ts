/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:15:17
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-07 20:18:26
 * @FilePath: \rabbit-ts-vue3\src\router\index.ts
 * @Description:router
 */
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: '/category/:id',
          component: () => import('@/views/category/index.vue'),
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/category/sub.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
})
export default router
