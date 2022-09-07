/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-07 22:26:19
 * @FilePath: \rabbit-ts-vue3\src\types\data.d.ts
 * @Description:类型文件
 */
// 接口通用返回类型
export interface ApiResponse<T> {
  code: string
  msg: string
  result: T
}
// CategoryItem 类型
export type CategoryItem = {
  id: string
  name: string
  picture: string
  open: boolean
  children: CategoryItem[]
}
// CategoryItem 类型响应类型
export type CategoryItemResponse = ApiResponse<CategoryItem[]>
