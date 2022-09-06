/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:15:17
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-06 20:22:49
 * @FilePath: \rabbit-ts-vue3\src\router\index.ts
 * @Description:router
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/views/layout/index.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
  ],
});
export default router;
