<script lang="ts" setup name="CallbackPatch">
import {
  useField,
  useForm,
  useValidateForm,
  useValidateField,
} from 'vee-validate'

import { useCountDown } from '@/hooks'

import useStore from '@/store'
import { validateRules } from '@/utils/validateRules'
import Message from '@/components/XtxMessage'
const { user } = useStore()
const router = useRouter()
// 绑定时候不需要校验此项 直接返回 true
validateRules.isAgree = () => {
  return true
}
// 1. 获取openId
let openId = ''
// 判断QQ是否登录
// eslint-disable-next-line no-undef
if (QC.Login.check()) {
  // 获取openId
  // eslint-disable-next-line no-undef
  QC.Login.getMe((id) => {
    openId = id
  })
}

// 表单校验

useForm({
  validationSchema: validateRules,
})

const { errorMessage: accountError, value: account } =
  useField<string>('account')

const { errorMessage: passwordError, value: password } =
  useField<string>('password')
const { errorMessage: mobileError, value: mobile } = useField<string>('mobile')
const { errorMessage: codeError, value: code } = useField<string>('code')
const { errorMessage: repasswordError, value: repassword } =
  useField<string>('repassword')

const validForm = useValidateForm()
const bind = async () => {
  const res = await validForm()
  if (!res.valid) return
  await user.qqPatchLogin({
    openId,
    mobile: mobile.value,
    code: code.value,
    account: account.value,
    password: password.value,
  })
  Message.success('注册成功')
  router.push('/')
}

// 获取验证码
const validMobile = useValidateField('mobile')
const { time, start } = useCountDown(60)
const send = async () => {
  if (time.value > 0) return
  // console.log('获取验证码')
  // 单独校验手机号
  const res = await validMobile()
  if (!res.valid) {
    return
  }
  await user.sendQQPathMsg(mobile.value)
  Message.success('获取验证码成功')
  start()
}
</script>
<template>
  <div class="xtx-form">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input
          class="input"
          v-model="account"
          type="text"
          placeholder="请输入用户名"
        />
      </div>
      <div class="error">{{ accountError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          v-model="mobile"
          type="text"
          placeholder="请输入手机号"
        />
      </div>
      <div class="error">{{ mobileError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input
          class="input"
          v-model="code"
          type="text"
          placeholder="请输入验证码"
        />
        <span class="code" @click="send">{{
          time > 0 ? `${time}s后发送` : '发送验证码'
        }}</span>
      </div>
      <div class="error">{{ codeError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </div>
      <div class="error">{{ passwordError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          v-model="repassword"
          type="password"
          placeholder="请确认密码"
        />
      </div>
      <div class="error">{{ repasswordError }}</div>
    </div>
    <a href="javascript:;" class="submit" @click="bind">立即提交</a>
  </div>
</template>

<style scoped lang="less">
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>
