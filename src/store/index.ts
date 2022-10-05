/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 10:43:07
 * @FilePath: \rabbit-ts-vue3\src\store\index.ts
 * @Description:store
 */
import useCategoryStore from './modules/category'
import useHome from './modules/home'
import useGoods from './modules/goods'
import useUser from './modules/user'
export default function useStore() {
  return {
    category: useCategoryStore(),
    home: useHome(),
    goods: useGoods(),
    user: useUser(),
  }
}
