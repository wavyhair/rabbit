<script lang="ts" setup name="LoginForm">
import useStore from '@/store'

import { useField, useForm } from 'vee-validate'
import Message from '@/components/XtxMessage'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { user } = useStore()
const type = ref<'account' | 'mobile'>('account')
// 表单校验
const { validate } = useForm({
  // 提供校验规则
  validationSchema: {
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
  },
})
const { value: account, errorMessage: accountError } =
  useField<string>('account')
const { value: password, errorMessage: passwordError } =
  useField<string>('password')
const { value: isAgree, errorMessage: isAgreeError } =
  useField<boolean>('isAgree')
const login = async () => {
  const { valid } = await validate()
  if (!valid) return
  user.login(account.value, password.value)
  router.push('/')
  Message.success('登录成功')
}
</script>
<template>
  <div class="account-box">
    <div class="toggle">
      <a href="javascript:;" @click="type = 'account'" v-if="type === 'mobile'">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a href="javascript:;" @click="type = 'mobile'" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <template v-if="type === 'account'">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input
              type="text"
              v-model="account"
              placeholder="请输入用户名或手机号"
            />
          </div>
          <div class="error" v-if="accountError">
            <i class="iconfont icon-warning" />{{ accountError }}
          </div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input
              type="password"
              v-model="password"
              placeholder="请输入密码"
            />
          </div>
          <div class="error" v-if="passwordError">
            <i class="iconfont icon-warning" />{{ passwordError }}
          </div>
        </div>
      </template>
      <div class="form-item">
        <div class="agree">
          <XtxCheckBox v-model="isAgree"></XtxCheckBox>
          <span>我已同意</span>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <div class="error" v-if="isAgreeError">
          <i class="iconfont icon-warning" />{{ isAgreeError }}
        </div>
      </div>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
    <div class="action">
      <img
        src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
        alt=""
      />
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.type,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
    }
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
