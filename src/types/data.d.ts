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
    children:CategoryItem[]
}
// CategoryItem 类型响应类型
export type CategoryItemResponse = ApiResponse<CategoryItem[]>