/*
 * @Author: CHENJIE
 * @Date: 2022-09-11 19:48:50
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-12 12:14:00
 * @FilePath: \rabbit-ts-vue3\src\global.d.ts
 * @Description:全局组件类型文件
 */

/**
 * vue3中如果注册的是局部组件，那么props是有类型提示的，但是如果注册的是全局组件，props就没有类型提示了
 * 参考1：How to make VSCode recognize global component in Vue?
 * 参考2：https://github.com/element-plus/element-plus/blob/dev/global.d.ts
 */
import XtxSkeleton from '@/components/skeleton/index.vue'
import XtxCarouse from '@/components/carouse/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
    XtxCarouse: typeof XtxCarouse
  }
}
export {}
