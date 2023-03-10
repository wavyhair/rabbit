/*
 * @Author: CHENJIE
 * @Date: 2022-09-06 19:40:26
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:30:37
 * @FilePath: \rabbit-ts-vue3\.eslintrc.cjs
 * @Description: eslintrc
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // 自定义规则
  rules: {
    // vue组件必须用组合词: 关闭
    'vue/multi-word-component-names': 'off',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
}
