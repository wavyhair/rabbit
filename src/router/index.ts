/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:15:17
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-11-09 10:47:43
 * @FilePath: \rabbit-ts-vue3.2\src\router\index.ts
 * @Description:router
 */
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import useStore from '@/store'
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
      path: '/cart',
      component: () => import('@/views/cart/index.vue'),
    },
    {
      path: '/member/checkout',
      component: () => import('@/views/member/pay/checkout.vue'),
    },
    {
      path: '/registration',
      component: () => import('@/views/registration/index.vue'),
    },
    {
      path: '/playground',
      component: () => import('@/views/playground/index.vue'),
    },
  ],
})
router.beforeEach((to, from, next) => {
  const { cart } = useStore()
  const isLogin = cart.isLogin
  if (isLogin) {
    next()
  } else {
    if (to.path.includes('/member')) {
      next({
        path: '/login',
        query: {
          redirectUrl: to.fullPath,
        },
      })
    } else {
      next()
    }
  }
})
export default router
