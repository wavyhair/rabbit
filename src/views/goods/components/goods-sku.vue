<!--
 * @Author: CHENJIE
 * @Date: 2022-09-30 21:31:57
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-09-30 21:32:02
 * @FilePath: \rabbit-ts-vue3\src\views\goods\components\goods-sku.vue
 * @Description:goods-sku
-->
<script setup lang="ts" name="GoodsSku"></script>
<template>
  <div class="goods-sku">
    <dl>
      <dt>颜色</dt>
      <dd>
        <img
          class="selected"
          src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png"
          alt=""
        />
        <img
          class="disabled"
          src="https://yanxuan-item.nosdn.127.net/d77c1f9347d06565a05e606bd4f949e0.png"
          alt=""
        />
      </dd>
    </dl>
    <dl>
      <dt>尺寸</dt>
      <dd>
        <span class="disabled">10英寸</span>
        <span class="selected">20英寸</span>
        <span>30英寸</span>
      </dd>
    </dl>
    <dl>
      <dt>版本</dt>
      <dd>
        <span>美版</span>
        <span>港版</span>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
