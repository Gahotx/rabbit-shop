<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { XtxGuessInstance } from '@/types/components'
import { onLoad } from '@dcloudio/uni-app'
import CategoryPanel from './components/CategoryPanel.vue'
import CustomNavbar from './components/CustomNavbar.vue'
import HotPanel from './components/HotPanel.vue'

// 获取首页轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerList = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取首页分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryList = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取首页热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotList = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 下拉刷新
const guessRef = ref<XtxGuessInstance>()
const isTriggered = ref(false)
const handleRefresPage = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerList(),
    getHomeCategoryList(),
    getHomeHotList(),
    handleLoadMoreData()
  ])
  isTriggered.value = false
}
// 触底加载更多
const handleLoadMoreData = () => {
  guessRef.value?.getMoreData()
}

onLoad(() => {
  getHomeBannerList()
  getHomeCategoryList()
  getHomeHotList()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="handleRefresPage"
    @scrolltolower="handleLoadMoreData"
    :refresher-triggered="isTriggered"
    class="scroll-view"
    scroll-y
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
