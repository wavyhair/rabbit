<!--
 * @Author: CHENJIE
 * @Date: 2022-10-13 22:09:20
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-13 22:22:23
 * @FilePath: \rabbit-ts-vue3\src\views\member\home\components\home-overview.vue
 * @Description:概览组件
-->
<script setup lang="ts" name="HomeOverview">
import useStore from '@/store'
import defaultImg from '@/assets/images/200.png'
import { storeToRefs } from 'pinia'
const { user } = useStore()
const { profile } = storeToRefs(user)
const imgEeeor = () => {
  profile.value.avatar = defaultImg
}
</script>

<template>
  <!-- 概览 -->
  <div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img @error="imgEeeor" :src="profile.avatar" />
      </div>
      <h4>{{ profile.nickname ?? '楚青' }}</h4>
    </div>
    <div class="item">
      <a href="javascript:;">
        <span class="iconfont icon-hy"></span>
        <p>会员中心</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-aq"></span>
        <p>安全设置</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-dw"></span>
        <p>地址管理</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-overview {
  height: 132px;
  background: url(@/assets/images/center-bg.png) no-repeat center / cover;
  display: flex;
  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;
    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:first-child {
      border-right: 1px solid #f4f4f4;
    }
    a {
      color: white;
      font-size: 16px;
      text-align: center;
      .iconfont {
        font-size: 32px;
      }
      p {
        line-height: 32px;
      }
    }
  }
}
</style>
