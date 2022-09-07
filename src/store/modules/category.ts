/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-07 23:06:20
 * @FilePath: \rabbit-ts-vue3\src\store\modules\category.ts
 * @Description:category
 */
import { topCategory } from '@/constants'
import requset from '@/utils/request'
import { CategoryItem, CategoryItemResponse } from '@/types/data'
import { defineStore } from 'pinia'

const defaultCategory = topCategory.map((item) => {
  return { name: item }
})

enum API {
  getAllCategory = '/home/category/head',
}
export default defineStore('category', {
  state: () => ({
    list: defaultCategory as CategoryItem[],
  }),
  actions: {
    // 获取分类
    getAllCategory() {
      requset.get<CategoryItemResponse>(API.getAllCategory).then((res) => {
        res.data.result.forEach((item) => {
          // open 属性控制显示或者隐藏
          item.open = false
        })
        this.list = res.data.result
      })
    },
    show(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = true
    },
    hide(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = false
    },
  },
})
