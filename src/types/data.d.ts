/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-11 18:04:22
 * @FilePath: \rabbit-ts-vue3\src\types\data.d.ts
 * @Description:类型文件
 */
// 接口通用返回类型
export interface ApiResponse<T> {
  code: string
  msg: string
  result: T
}
// 分类商品类型
export type CategoryGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// CategoryItem 类型
export type CategoryItem = {
  id: string
  name: string
  picture: string
  open: boolean
  goods: CategoryGoods[]
  children: CategoryItem[]
}
// CategoryItem 类型响应类型
export type CategoryItemResponse = ApiResponse<CategoryItem[]>
