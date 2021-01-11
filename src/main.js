import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 自适应
import "amfe-flexible";

// 网络请求
import axios from "axios";

// 图表
import echarts from 'echarts'
import 'echarts-liquidfill'
import 'echarts/map/js/china.js'
Vue.prototype.$echarts = echarts

import './assets/css/font_icon/iconfont.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount("#app");
