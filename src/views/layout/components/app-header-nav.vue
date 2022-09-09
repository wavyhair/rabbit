<!--
 * @Author: CHENJIE
 * @Date: 2022-09-06 22:07:38
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-09 14:21:00
 * @FilePath: /src/views/layout/components/app-header-nav.vue
 * @Description: app-header-nav
-->
<script lang="ts" setup name="AppHeaderNav">
import useStore from '@/store'
const { category } = useStore()
category.getAllCategory()
</script>

<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <!-- 一级分类按钮 -->
    <li
      v-for="(item, index) in category.list"
      @mouseenter="category.show(item.id)"
      @mouseleave="category.hide(item.id)"
      :key="index"
    >
      <RouterLink
        @click="category.hide(item.id)"
        :to="`/category/${item.id}`"
        >{{ item.name }}</RouterLink
      >
      <div class="layer" :class="{ open: item.open }">
        <ul>
          <!-- 二级分类按钮 -->
          <li v-for="sub in item.children" :key="sub.id">
            <RouterLink
              @click="category.hide(item.id)"
              :to="`/category/sub/${sub.id}`"
            >
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
.app-header-nav {
  position: relative;
  z-index: 998;

  display: flex;

  width: 820px;
  padding-left: 40px;
  > li {
    width: 38px;
    margin-right: 40px;

    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;

      display: inline-block;

      height: 32px;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
  }
}
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  position: absolute;
  top: 56px;
  left: -200px;

  overflow: hidden;

  width: 1240px;
  height: 0;

  transition: all 0.2s 0.1s;

  opacity: 0;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    height: 132px;
    padding: 0 70px;
    li {
      width: 110px;

      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
