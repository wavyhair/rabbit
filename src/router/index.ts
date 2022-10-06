/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:15:17
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 10:13:41
 * @FilePath: \rabbit-ts-vue3\src\router\index.ts
 * @Description:router
 */
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
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
        {
          path: '/product/:id',
          component: () => import('@/views/goods/index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/login/callback',
      component: () => import('@/views/login/callback.vue'),
    },
    {
      path: '/registration',
      component: () => import('@/views/registration/index.vue'),
    },
  ],
})
export default router
