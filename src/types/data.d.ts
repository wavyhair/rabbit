/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-14 20:55:04
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
// 首页轮播图类型
export type SlidesItem = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}
// 新鲜好物类型
export interface GoodItem {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}

// 人气推荐类型
export interface HotGoods {
  id: string
  picture: string
  title: string
  alt: string
}

// CategoryItem 类型响应类型
export type CategoryItemResponse = ApiResponse<CategoryItem[]>
// 首页轮播图响应类型
export type SlidesItemResponse = ApiResponse<SlidesItem[]>
// 新鲜好物响应类型
export type GoodItemResponse = ApiResponse<GoodItem[]>
// 人气推荐响应类型
export type HotGoodsResponse = ApiResponse<HotGoods[]>
