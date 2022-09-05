# Vue 3 + TypeScript + Vite


使用技术

> 目的：概述下项目会运用到的技术点。

项目基于vue技术来实现，大概会使用以下技术：

- vue3.0 (使用组合api的方式来开发)
- vite开发
- axios (请求接口)
- vue-router (单页路由)
- pinia (状态管理)
- normalize.css (初始化样式)
- @vueuse/core (组合api常用工具库)
- 算法 [Power Set](https://github.com/zhousg/javascript-algorithms/blob/master/src/algorithms/sets/power-set)
- dayjs (日期处理)
- vee-validate （表单校验）

**重点：** 电商常见业务和解决方案，掌握基于vue3.0的组合api开发模式。

**说明：** 由于前台项目，没有合适的UI组件库（没有适用vue3.0的ui库），不会使用组件库。

- 轮播图组件
- 面包屑组件
- 查看更多组件
- 骨架屏组件
- 复选框组件
- 单选框组件
- 对话框组件
- 消息提示组件 函数调用
- 消息确认组件 函数调用
- 分页组件
- 步骤条组件
- 时间线组件
- 标签页组件
- 城市选择组件

总结：基于vue3.0的技术栈，大量的组件封装。

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
