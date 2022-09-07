import requset from '@/utils/request'
import {  CategoryItem, CategoryItemResponse } from '@/types/data'
import { defineStore } from 'pinia'

enum API {
    getAllCategory = '/home/category/head'
}
export default defineStore('category', {
    state: () => ({
        list:[] as CategoryItem[]
    }),
    actions: {
        // 获取分类
        getAllCategory() { 
            requset.get<CategoryItemResponse>(API.getAllCategory).then(res=>{
                this.list = res.data.result
            })
        }
    }
})
