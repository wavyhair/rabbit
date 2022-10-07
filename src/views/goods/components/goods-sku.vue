<!--
 * @Author: CHENJIE
 * @Date: 2022-09-30 21:31:57
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-07 10:14:55
 * @FilePath: \rabbit-ts-vue3\src\views\goods\components\goods-sku.vue
 * @Description:goods-sku
-->
<script setup lang="ts" name="GoodsSku">
import bwPowerSet from '@/utils/bwPowerSet'
import { GoodsInfo, Spec, SpecValue } from '@/types/goods'

const props = defineProps<{ goods: GoodsInfo; skuId?: string }>()
interface Emits {
  (e: 'selChange', skuId: string): void
}
const emits = defineEmits<Emits>()
/**
 * 用来拼接的字符串
 */
const JOIN_STR = '+'
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
  updateDisStatus()
  const selSku = getSelSpec().filter((val) => val)
  // 如果每个规格都有了选项 就要把选中的 skuId 传给父组件
  if (selSku.length === props.goods.specs.length) {
    // selStr 是选中的 sku 拼接的字符串
    const selStr = selSku.join(JOIN_STR)
    // 拿着 selStr 在 pathMap 里面找对应的 id
    const skuId = pathMap[selStr][0]
    emits('selChange', skuId)
  } else {
    emits('selChange', '')
  }
}

const getPathMap = () => {
  const pathMap = {} as { [key: string]: string[] }
  const skus = props.goods.skus.filter((item) => {
    return item.inventory
  })
  skus.forEach((sku) => {
    // 所有可选择的 sku  ['黑色', '20cm', '中国'] 、['蓝色', '10cm', '中国']...
    const arr = sku.specs.map((item) => item.valueName)
    // 拿到每个 sku 的子集   [] 、['蓝色']、['20cm']、['蓝色', '20cm']、['中国']、 ['蓝色', '中国']、['20cm', '中国']、['蓝色', '20cm', '中国']
    const powerSet = bwPowerSet(arr)
    powerSet.forEach((sub) => {
      const key = sub.join(JOIN_STR)
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}

// 初始化更新状态
const updateDisStatus = () => {
  const selArr = getSelSpec() // 当前选中的规格 ['', '10cm', '中国']
  // 遍历每一行
  props.goods.specs.forEach((spec, index) => {
    // 遍历规格所有选项
    spec.values.forEach((values) => {
      const tempArr = [...selArr]
      tempArr[index] = values.name // 让当前这个按钮 values.name(黑色) 和 selArr 组合 ['黑色', '10cm', '中国']
      const key = tempArr.filter((k) => k).join(JOIN_STR) // 用 + 拼接
      // 如果在路径字典里面找到了 key 就不禁用 否则 禁用
      if (key in pathMap) {
        values.disabled = false
      } else {
        values.disabled = true
      }
    })
  })
}

// 获取选中的规格
const getSelSpec = () => {
  const arr: string[] = []
  props.goods.specs.forEach((spec, index) => {
    const selVal = spec.values.find((v) => v.selected)
    arr[index] = selVal ? selVal.name : ''
  })
  return arr
}

const initSelectedSpec = () => {
  // 如果没有 skuId 直接 return
  if (!props.skuId) return
  // activeSpesc 根据 skuId 查找到要激活的规格信息
  const activeSpesc = props.goods.skus.find(
    (sku) => sku.id === props.skuId
  )?.specs
  // 如果没有找到直接 return
  if (!activeSpesc) return
  props.goods.specs.forEach((spec, index) => {
    // currentName 是要激活的 name
    const currentName = activeSpesc[index].valueName
    // currentResult 是每一个规格里面要激活的具体按钮
    const currentResult = spec.values.find((val) => val.name === currentName)
    // 找到之后设置这个按钮的选中状态为 true
    currentResult!.selected = true
  })
}
// 获取路径字典
const pathMap = getPathMap()
// 先设置默认选中
initSelectedSpec()
// 更新状态
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
