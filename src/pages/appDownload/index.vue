<template>
  <div>
    <img class="bg" src="@/assets/img/download.png">
    <div class="button" @click="openApp"><span>下载小说客</span></div>
    <van-overlay :show="showGuidance" @click="showGuidance = false">
      <div class="showGuidance" @click="showGuidance = false">
        <img src="@/assets/img/share_guidance.png">
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { isWeixin, isIOS, isAndroid } from '@/utils'

export default {
  name: 'AppDownload',
  data() {
    return {
      showGuidance: false
    }
  },
  methods: {
    openApp() {
      if (isWeixin()) {
        this.showGuidance = true
      } else if (isIOS()) {
        window.location.href = 'https://apps.apple.com/cn/app/id6469036240'
      } else {
        window.location.href='https://sj.qq.com/appdetail/com.talk.vocabulary'
      }
    }
  }
}
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.button {
  position: fixed;
  bottom: 107px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 670px;
  height: 96px;
  background: #FFC929;
  border-radius: 16px 16px 16px 16px;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
  text-align: center;
  cursor: pointer;
}

.showGuidance {
  img {
    position: absolute;
    top: 30px;
    right: 0;
    width: 510px;
    height: 666px;
  }
}
</style>
