<!--
 * @Author: CHENJIE
 * @Date: 2022-09-06 22:07:38
 * @LastEditors: chenjie
 * @LastEditTime: 2022-09-07 17:17:46
 * @FilePath: /src/views/layout/components/app-header-nav.vue
 * @Description: app-header-nav
-->
<script lang="ts" setup name="AppHeaderNav">
  import useStore from '@/store'
  import { storeToRefs } from 'pinia';
  const {category} = useStore()
  category.getAllCategory()
  const {list} =storeToRefs(category) 
</script>

<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <!-- 一级分类按钮 -->
    <li v-for="item in list" :key="item.id"><a href="#">{{item.name}}</a></li>

    <div class="layer">
        <ul>
          <!-- 二级分类按钮 -->
          <li v-for="i in 10" :key="i">
            <a href="#">
              <img
                src="https://yanxuan.nosdn.127.net/cc361cf40d4f81c7eccefed1ad18face.png?quality=95&imageView"
                alt=""
              />
              <p>果干</p>
            </a>
          </li>
        </ul>
      </div>
  </ul>
</template>

<style scoped lang="less">
  .app-header-nav
  {
      position: relative;
      z-index: 998;

      display: flex;

      width: 820px;
      padding-left: 40px;
      > li
      {
          width: 38px;
          margin-right: 40px;

          text-align: center;
          > a
          {
              font-size: 16px;
              line-height: 32px;

              display: inline-block;

              height: 32px;
              &:hover
              {
                  color: @xtxColor;
                  border-bottom: 1px solid @xtxColor;
              }
          }
          &:hover
          {
              > a
              {
                  color: @xtxColor;
                  border-bottom: 1px solid @xtxColor;
              }
              > .layer
              {
                  height: 132px;

                  opacity: 1;
              }
          }
      }
  }
  .layer
  {
      position: absolute;
      top: 56px;
      left: -200px;

      overflow: hidden;

      width: 1240px;
      height: 0;

      transition: all .2s .1s;

      opacity: 0;
      background-color: #fff;
      box-shadow: 0 0 5px #ccc;
      ul
      {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          height: 132px;
          padding: 0 70px;
          li
          {
              width: 110px;

              text-align: center;
              img
              {
                  width: 60px;
                  height: 60px;
              }
              p
              {
                  padding-top: 10px;
              }
              &:hover
              {
                  p
                  {
                      color: @xtxColor;
                  }
              }
          }
      }
  }

  </style>