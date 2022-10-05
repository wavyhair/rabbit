/*
 * @Author: CHENJIE
 * @Date: 2022-10-05 22:06:14
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-05 22:06:44
 * @FilePath: \rabbit-ts-vue3\src\utils\validateRules.ts
 * @Description:validateRules
 */
export const validateRules = {
  account: (value: string) => {
    // 校验的value值
    // value是将来使用该规则的表单元素的值
    // 1. 必填
    // 2. 6-20个字符，需要以字母开头
    // 如何反馈校验成功还是失败，返回true才是成功，其他情况失败，返回失败原因。
    if (!value) return '请输入用户名'
    if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
    return true
  },
  password: (value: string) => {
    if (!value) return '请输入密码'
    if (!/^\w{6,12}$/.test(value)) return '密码必须是6-24位字符'
    return true
  },
  isAgree: (value: boolean) => {
    if (!value) return '请同意隐私条款'
    return true
  },
  mobile: (value: string) => {
    if (!value) return '请输入手机号'
    if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
    return true
  },
  code: (value: string) => {
    if (!value) return '请输入验证码'
    if (!/^\d{6}$/.test(value)) return '验证码格式错误'
    return true
  },
}
