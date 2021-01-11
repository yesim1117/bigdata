<template>
    <div class="header-wrapper">
    <div class="header">
      <div class="title">
        {{ this.$store.state.farms.platformName }}
      </div>
    </div>
    <div class="asset-bar">
      <div>农场面积：<span class="asset-num">1000</span></div>
      <div>农场人数：<span class="asset-num">58</span></div>
      <div>农场作物：<span class="asset-num">番茄，草莓</span></div>
      <div>当前预计产值：<span class="asset-num">2600000</span></div>
      <div>用水量：<span class="asset-num">36207</span></div>
      <div>累积节约用水：<span class="asset-num">6250</span></div>
    </div>
    <!-- <div class="tab-left">
      <div class="tab-left-item">智控中台</div>
      <div class="tab-left-item">图像监测</div>
    </div>
    <div class="tab-right">
      <div class="tab-right-item">环境智控</div>
      <div class="tab-right-item">灌溉控制</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    // 获取图片地址
    // getImgUrl(icon) {
    //   return require("@/assets/images/128/" + icon + ".png");
    // }
  },
  mounted() {
    // getWeatherNow().then(res => {
    //   this.nowDaily = res.now;
    // })
  },
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  height: 80px;
  text-align: center;
  color: #ffffff;
  position: relative;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 55px;
  background: url('../../assets/images/headerBg.png') no-repeat;
  background-size: 100% 60px;
}
.title {
  width: 100%;
  font-size: 16px;
  color: #1fa7dd;
  background-image: -webkit-linear-gradient(bottom, #20d3f3, #1f9fdc, #1f85d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.tab-left, .tab-right {
  position: absolute;
  top: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 220px;
  cursor: pointer;
}
.tab-left .tab-left-item, .tab-right .tab-right-item {
  line-height: 40px;
  padding: 0 20px;
  background-size: 100% 40px;
  transform: translate(0, 10px);
}
.tab-left {
  left: 14%;
}
.tab-left-item {
  /* background: url('../../assets/images/bar-left-bg.png') no-repeat; */
}
.tab-right {
  right: 14%;
}
.tab-right-item {
  /* background: url('../../assets/images/2.png') no-repeat; */
}
.asset-bar {
  width: 60%;
  padding: 5px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #2090f6;
}
.asset-bar div {
  font-size: 10px;
}
.asset-num {
  color: #ffc43e;
  font-weight: bold;
  font-size: 10px;
}
</style>
