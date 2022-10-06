<!--
 * @Author: CHENJIE
 * @Date: 2022-10-06 10:20:26
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-06 12:27:18
 * @FilePath: \rabbit-ts-vue3\src\views\login\components\callback-bind.vue
 * @Description:
-->
<script name="CallbackBind" lang="ts" setup>
import { validateRules } from '@/utils/validateRules'

import { QQUserInfo, QQUserInfoRes } from '@/types/user'
import { useForm, useField } from 'vee-validate'
import useStore from '@/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCountDown } from '@/hooks'
import Message from '@/components/XtxMessage'
const router = useRouter()
const { user } = useStore()
const qqInfo = ref<QQUserInfo>({} as QQUserInfo)
// eslint-disable-next-line no-undef
const isLogin = QC.Login.check()
const resId = ref('')
if (isLogin) {
  // eslint-disable-next-line no-undef
  QC.Login.getMe(async (openId) => {
    resId.value = openId
    // 2. 获取QQ用户信息
    // eslint-disable-next-line no-undef
    QC.api('get_user_info').success((res: QQUserInfoRes) => {
      qqInfo.value = res.data
    })
  })
}

// 表单校验
const { validate } = useForm({
  validationSchema: {
    mobile: validateRules.mobile,
    code: validateRules.code,
  },
})
const {
  value: mobile,
  errorMessage: mobileError,
  validate: validateMobile,
} = useField<string>('mobile')
const { value: code, errorMessage: codeError } = useField<string>('code')

const { time, start } = useCountDown()
// 发送验证码
const send = async () => {
  if (time.value > 0) return
  const res = await validateMobile()
  if (!res.valid) return
  // 如果校验，发送请求进行绑定
  await user.sendQQBindMsg(mobile.value)
  start()
}
// 绑定
const bind = async () => {
  const res = await validate()
  if (!res.valid) return
  // 如果校验，发送请求进行绑定
  await user.qqBindLogin(resId.value, mobile.value, code.value)
  Message.success('QQ绑定成功')
  router.push('/')
}
</script>
<template>
  <div class="xtx-form">
    <div class="user-info">
      <img :src="qqInfo.figureurl_2" alt="" />
      <p>
        Hi，{{ qqInfo.nickname }} 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~
      </p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          v-model="mobile"
          type="text"
          placeholder="绑定的手机号"
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
          placeholder="短信验证码"
        />
        <span class="code" @click="send">{{
          time > 0 ? `${time}s后重新发送` : '发送验证码'
        }}</span>
        <div class="error">{{ codeError }}</div>
      </div>
      <div class="error"></div>
    </div>
    <a href="javascript:;" class="submit" @click="bind">立即绑定</a>
  </div>
</template>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 25px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 95px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>
