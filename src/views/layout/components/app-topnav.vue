<!--
 * @Author: CHENJIE
 * @Date: 2022-09-06 22:00:33
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-13 22:02:34
 * @FilePath: \rabbit-ts-vue3\src\views\layout\components\app-topnav.vue
 * @Description: app-topnav.vue
-->
<script lang="ts" setup name="AppTopnav">
import Confirm from '@/components/XtxConfirm/index'
import useStore from '@/store'
const { user, cart } = useStore()
const router = useRouter()
const logout = () => {
  Confirm({ text: '确定要退出吗？' }).then(() => {
    cart.$reset()
    user.logout()
    router.push('/login')
  })
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li v-if="user.profile.token">
          <a href="javascript:;"
            ><i class="iconfont icon-user"></i
            >{{
              user.profile.nickname || user.profile.account || '楚青师哥'
            }}</a
          >
        </li>
        <li v-if="!user.profile.token">
          <RouterLink to="/login">请先登录</RouterLink>
        </li>

        <li v-else><a href="javascript:;" @click="logout">退出登录</a></li>
        <li>
          <a href="javascript:;" @click="router.push('/registration')"
            >免费注册</a
          >
        </li>
        <li><RouterLink to="/member/order">我的订单</RouterLink></li>
        <li><RouterLink to="/member">会员中心</RouterLink></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
