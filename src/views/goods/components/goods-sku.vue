<!--
 * @Author: CHENJIE
 * @Date: 2022-09-30 21:31:57
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-01 23:07:04
 * @FilePath: \rabbit-ts-vue3\src\views\goods\components\goods-sku.vue
 * @Description:goods-sku
-->
<script setup lang="ts" name="GoodsSku">
import bwPowerSet from '@/utils/bwPowerSet'
import { GoodsInfo, Spec, SpecValue } from '@/types/goods'

const props = defineProps<{ goods: GoodsInfo }>()
console.log('props.goods', props.goods.specs)
/**
 * 选中的规格
 * @param spec 每一个规格的所有选项
 * @param sub 点击的选项
 */
const changeSelected = (spec: Spec, specValue: SpecValue) => {
  if (specValue.disabled) return
  if (specValue.selected) {
    specValue.selected = false
  } else {
    spec.values.forEach((item) => (item.selected = false))
    specValue.selected = true
  }
}

const getPathMap = () => {
  const pathMap = {} as any
  const skus = props.goods.skus.filter((item) => {
    return item.inventory
  })
  skus.forEach((sku) => {
    // 所有可选择的 sku  ['黑色', '20cm', '中国'] 、['蓝色', '10cm', '中国']...
    const arr = sku.specs.map((item) => item.valueName)
    // 拿到每个 sku 的子集   [] 、['蓝色']、['20cm']、['蓝色', '20cm']、['中国']、 ['蓝色', '中国']、['20cm', '中国']、['蓝色', '20cm', '中国']
    const powerSet = bwPowerSet(arr)
    powerSet.forEach((sub) => {
      const key = sub.join('+')
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}

// 获取路径字典
const pathMap = getPathMap()
// 初始化更新状态
const updateDisStatus = () => {
  props.goods.specs.forEach((spec) => {
    console.log('spec', spec)
    spec.values.forEach((values) => {
      // 如果在路径字典里面找到了 name 就不禁用 否则 禁用
      if (values.name in pathMap) {
        values.disabled = false
      } else {
        values.disabled = true
      }
    })
  })
}
updateDisStatus()
</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img
            v-if="sub.picture"
            :class="{ selected: sub.selected, disabled: sub.disabled }"
            :src="sub.picture"
            :title="sub.name"
            alt=""
            @click="changeSelected(item, sub)"
          />
          <span
            v-else
            :class="{ selected: sub.selected, disabled: sub.disabled }"
            @click="changeSelected(item, sub)"
            >{{ sub.name }}</span
          >
        </template>
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
