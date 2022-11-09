/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 20:15:17
 * @LastEditors: CHENJIE
<<<<<<< HEAD
 * @LastEditTime: 2022-11-09 10:47:43
 * @FilePath: \rabbit-ts-vue3.2\src\router\index.ts
=======
 * @LastEditTime: 2022-10-15 12:38:59
 * @FilePath: \rabbit-ts-vue3\src\router\index.ts
>>>>>>> d7f5daa7899dc760eb35bf1ca6290aab44e33701
 * @Description:router
 */
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import useStore from '@/store'
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
      path: '/playground',
      component: () => import('@/views/playground/index.vue'),
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
      path: '/member',
      component: () => import('@/views/member/layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/member/home/index.vue'),
        },
        {
          path: 'order',
          component: () => import('@/views/member/order/index.vue'),
        },
      ],
    },
    {
      path: '/member/checkout',
      component: () => import('@/views/member/pay/checkout.vue'),
    },
    {
      path: '/member/pay',
      component: () => import('@/views/member/pay/index.vue'),
    },
    {
      path: '/pay/callback',
      component: () => import('@/views/member/pay/callback.vue'),
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
