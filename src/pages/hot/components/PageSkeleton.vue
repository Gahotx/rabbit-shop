<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="cover cover">
        <image class="sk-image"></image>
      </view>
      <view class="tabs tabs">
        <text
          class="text active sk-transparent sk-text-34-4444-643 sk-text sk-pseudo sk-pseudo-circle"
          >抢先尝鲜</text
        >
        <text class="text sk-transparent sk-text-34-4444-445 sk-text">新品预告</text>
      </view>
      <scroll-view
        :scroll-with-animation="true"
        :scroll-y="true"
        class="scroll-view scroll-view"
        scroll-top="0"
      >
        <view class="goods goods">
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-576 sk-text"
              >钻石陶瓷涂层多用锅18cm 小奶锅</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-405 sk-text">149.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-68 sk-text"
              >经典格子元素，男童加绒格子衬衫</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-269 sk-text">125.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-872 sk-text"
              >泸州老窖特曲浓香型白酒</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-768 sk-text">280.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-482 sk-text"
              >新款LOGO印花时尚学步叫叫鞋</view
            >
            <view class="price price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-0-0000-935 sk-text">259.00</text>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="thumb sk-image"></image>
          </navigator>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-34-4444-643 {
  background-image: linear-gradient(
    transparent 34.4444%,
    #eeeeee 0%,
    #eeeeee 65.5556%,
    transparent 0%
  ) !important;
  background-size: 100% 90rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-34-4444-445 {
  background-image: linear-gradient(
    transparent 34.4444%,
    #eeeeee 0%,
    #eeeeee 65.5556%,
    transparent 0%
  ) !important;
  background-size: 100% 90rpx;
  position: relative !important;
}
.sk-text-14-2857-576 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-405 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-68 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-0-0000-269 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-872 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-0-0000-768 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-482 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-0-0000-935 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
