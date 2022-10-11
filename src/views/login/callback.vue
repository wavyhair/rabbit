<!--
 * @Author: CHENJIE
 * @Date: 2022-10-06 10:13:08
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-11 16:54:08
 * @FilePath: /src/views/login/callback.vue
 * @Description:callback
-->
<script lang="ts" setup name="LoginCallback">
import useStore from '@/store'
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
import CallbackBind from './components/callback-bind.vue'
import CallbackPatch from './components/callback-patch.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Message from '@/components/XtxMessage'
const { user } = useStore()
const router = useRouter()
const hasAccount = ref(true)
/**
 * 是否第三方登录成功
 */
// eslint-disable-next-line no-undef
const isLogin = QC.Login.check()
if (isLogin) {
  // eslint-disable-next-line no-undef
  QC.Login.getMe(async (openId) => {
    await user.qqLogin(openId)
    Message.success('登录成功')
    router.push('/')
  })
}
</script>

<template>
  <LoginHeader></LoginHeader>
  <section class="container">
    <nav class="tab">
      <a
        :class="{ active: hasAccount }"
        href="javascript:;"
        @click="hasAccount = true"
      >
        <i class="iconfont icon-bind" />
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a
        :class="{ active: !hasAccount }"
        href="javascript:;"
        @click="hasAccount = false"
      >
        <i class="iconfont icon-edit" />
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content" v-if="hasAccount"><CallbackBind /></div>
    <div class="tab-content" v-else><CallbackPatch /></div>
  </section>
  <LoginFooter></LoginFooter>
</template>

<style scoped lang="less">
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>
