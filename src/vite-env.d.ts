/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 18:46:37
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 11:35:22
 * @FilePath: \rabbit-ts-vue3\src\vite-env.d.ts
 * @Description:vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare namespace QC {
  const Login: {
    /**
     * 检查QQ是否登录成功
     */
    check: () => boolean
    /**
     * 获取openId
     */
    getMe: (callback: (openId: string) => void) => void
  }
  const api: (api: 'get_user_info') => { success: (res: any) => void }
}
