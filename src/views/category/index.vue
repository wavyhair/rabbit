<!--
 * @Author: CHENJIE
 * @Date: 2022-09-07 20:00:34
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:34:22
 * @FilePath: \rabbit-ts-vue3\src\views\category\index.vue
 * @Description: category
-->

<script lang="ts" name="TopCategory" setup>
import GoodsItem from './components/goods-item.vue'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { category, home } = useStore()
const { topCategory } = storeToRefs(category)
home.getSlides()
const route = useRoute()
watchEffect(() => {
  const id = route.params.id
  if (route.fullPath === `/category/${id}`) {
    category.getTopCategory(route.params.id as string)
  }
})
</script>
<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread v-if="category.topCategory.id">
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/catagory/${category.topCategory.id}`">{{
          category.topCategory.name
        }}</XtxBreadItem>
      </XtxBread>
      <XtxSkeleton
        v-else
        fade
        animated
        bg="#515151"
        :width="100"
        :height="24"
      />
      <!-- 轮播图 -->
      <XtxCarouse
        v-if="home.slides.length > 0"
        :slides="home.slides"
        auto-play
        :duration="3000"
        style="height: 500px"
      />
      <XtxSkeleton v-else fade animated bg="#515151" :height="500" />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in topCategory.children" :key="item.id">
            <a href="javascript:;">
              <img v-lazy="item.picture" />
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 分类关联商品 -->
      <div
        class="ref-goods"
        v-for="item in topCategory.children"
        :key="item.id"
      >
        <div class="head">
          <h3>- {{ item.name }} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore />
        </div>
        <div class="body">
          <GoodsItem
            v-for="goods in item.goods"
            :key="goods.id"
            :goods="goods"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
