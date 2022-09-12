/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 09:35:57
 * @FilePath: \rabbit-ts-vue3\src\store\index.ts
 * @Description:store
 */
import useCategoryStore from './modules/category'
import useHome from './modules/home'
export default function useStore() {
  return {
    category: useCategoryStore(),
    home: useHome(),
  }
}
