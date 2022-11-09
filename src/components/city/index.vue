<!--
 * @Author: CHENJIE
 * @Date: 2022-09-29 19:54:59
 * @LastEditors: CHENJIE
 * @LastEditTime: 2022-10-12 18:34:29
 * @FilePath: \rabbit-ts-vue3\src\components\city\index.vue
 * @Description:city
-->
<script lang="ts" setup name="XtxCity">
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'
// 选择的城市结果类型
export interface CityResult {
  provinceCode: string
  provinceName: string
  cityCode: string
  cityName: string
  countyCode: string
  countyName: string
}
interface AreaList {
  // 城市列表类型
  code: string
  level: number
  name: string
  areaList: AreaList[]
}

interface Emit {
  (e: 'changeCity', value: CityResult): void
}

defineProps<{
  userAddress?: string
}>()
const emit = defineEmits<Emit>()
const URL =
  'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
const cityList = ref<AreaList[]>([])
const cacheList = ref<AreaList[]>([])
const getCityList = async () => {
  const res = await axios.get<AreaList[]>(URL)
  cityList.value = res.data
  cacheList.value = res.data
}
getCityList()
const active = ref(false)
const toogle = () => {
  active.value = !active.value
}
const target = ref<null | HTMLDivElement>(null)
onClickOutside(target, () => {
  active.value = false
})

// 选择城市
const changeResult = reactive({
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: '',
})

const selectCity = (city: AreaList) => {
  // 省
  if (city.level === 0) {
    changeResult.provinceCode = city.code
    changeResult.provinceName = city.name
    cityList.value = city.areaList
  }
  // 市
  if (city.level === 1) {
    changeResult.cityCode = city.code
    changeResult.cityName = city.name
    cityList.value = city.areaList
  }
  // 区（县）
  if (city.level === 2) {
    changeResult.countyCode = city.code
    changeResult.countyName = city.name
    emit('changeCity', changeResult)
    active.value = false
  }
}
watch(active, (val) => {
  if (!val) {
    cityList.value = cacheList.value
  }
})
</script>
<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toogle">
      <span v-if="userAddress" class="value">{{ userAddress }}</span>
      <span v-else class="placeholder">请选择配送地址</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="active">
      <span
        class="ellipsis"
        v-for="item in cityList"
        :key="item.code"
        @click="selectCity(item)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
