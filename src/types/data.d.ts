/*
 * @Author: CHENJIE
 * @Date: 2022-09-07 19:20:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-25 21:49:28
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

// 热门品牌类型

export type Brand = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}

// 首页商品推荐
export type HomeProduct = {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: {
    id: string
    name: string
  }[]
  goods: {
    id: string
    name: string
    desc: string
    price: string
    picture: string
    discount?: any
    orderNum: number
  }[]
}

// 最新专题

export type Special = {
  creator: string
  isDelete: number
  createTime: string
  updateTime: string
  id: string
  classificationId: string
  title: string
  summary: string
  lowestPrice: number
  cover: string
  detailsUrl: string
  collectNum: number
  viewNum: number
  replyNum: number
}

// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: CategoryItem[]
}

// CategoryItem 类型响应类型
export type CategoryItemResponse = ApiResponse<CategoryItem[]>
// 首页轮播图响应类型
export type SlidesItemResponse = ApiResponse<SlidesItem[]>
// 新鲜好物响应类型
export type GoodItemResponse = ApiResponse<GoodItem[]>
// 人气推荐响应类型
export type HotGoodsResponse = ApiResponse<HotGoods[]>
// 热门品牌响应类型
export type BrandResponse = ApiResponse<Brand[]>
// 商品推荐响应类型
export type HomeProductResponse = ApiResponse<HomeProduct[]>
// 最新专题响应类型
export type SpecialResponse = ApiResponse<Special[]>
// 顶级分类响应类型
export type TopCategoryResponse = ApiResponse<TopCategory>
