/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-11 20:50:14
 * @FilePath: \rabbit-ts-vue3\src\store\index.ts
 * @Description:store
 */
import useCategoryStore from './modules/category'
import useHome from './modules/home'
import useGoods from './modules/goods'
import useUser from './modules/user'
import useCart from './modules/cart'
import useCheckout from './modules/checkout'
export default function useStore() {
  return {
    category: useCategoryStore(),
    home: useHome(),
    goods: useGoods(),
    user: useUser(),
    cart: useCart(),
    checkout: useCheckout(),
  }
}
