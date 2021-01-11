<template>
  <div class="home-right">
    <div class="ei-control">
      <div class="weather-title">环境智控</div>

      <div class="control-wrapper">
        <i class="iconfont icon-shilian"></i>
        <span class="control-title">1号湿帘</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_c_01')"
          v-model="oJlc"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-shilian"></i>
        <span class="control-title">2号湿帘</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_c_02')"
          v-model="tJlc"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-fengji"></i>
        <span class="control-title">1号通风</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_d_01')"
          v-model="oTfc"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-fengji"></i>
        <span class="control-title">2号通风</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_d_02')"
          v-model="tTfc"
        />
      </div>

      <div class="control-wrapper">
        <i class="iconfont icon-shuifeiji"></i>
        <span class="control-title">1号水肥</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_e_01')"
          v-model="oSfc"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-shuifeiji"></i>
        <span class="control-title">2号水肥</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_e_02')"
          v-model="tSfc"
        />
      </div>
    </div>
    <div class="gg-control">
      <div class="weather-title">灌溉控制</div>
      <div class="control-wrapper">
        <i class="iconfont icon-shujutubiao26"></i>
        <span class="control-title">总阀</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_00')"
          v-model="oZfc"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-jinshuiliang"></i>
        <span class="control-title">1号棚进水</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_01')"
          v-model="Sfc1"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-jinshuiliang"></i>
        <span class="control-title">2号棚进水</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_02')"
          v-model="Sfc2"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-jinshuiliang"></i>
        <span class="control-title">3号棚进水</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_03')"
          v-model="Sfc3"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-jinshuiliang"></i>
        <span class="control-title">4号棚进水</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_04')"
          v-model="Sfc4"
        />
      </div>
      <div class="control-wrapper">
        <i class="iconfont icon-jinshuiliang"></i>
        <span class="control-title">5号棚进水</span>
        <input
          class="switch switch-anim"
          type="checkbox"
          @click="pushControl('s_f_05')"
          v-model="Sfc5"
        />
      </div>
    </div>
    <div class="cgqyc">
      <div class="weather-title">传感器预警</div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
    </div>
    <div class="ncyj">
      <div class="weather-title">农场预警</div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
      <div class="sensor-wrapper">
        <div class="sensor-left">
          <i class="iconfont icon-chuanganqi-yichang"></i>002传感器异常
        </div>
        <div class="sensor-right">2020-12-24 01:15</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getSensors,
  getMoisture,
  getControls,
  putControls,
} from "@/network/index";
export default {
  name: "ContentRight",
  data() {
    return {
      oJlc: false,
      tJlc: false,

      oTfc: false,
      tTfc: false,

      oSfc: false,
      tSfc: false,

      oZfc: false,
      Sfc1: false,
      Sfc2: false,
      Sfc3: false,
      Sfc4: false,
      Sfc5: false,
    };
  },
  methods: {
    init() {
      getControls("s_c_01").then((res) => {
        this.oJlc = Boolean(parseInt(res.state));
      });
      getControls("s_c_02").then((res) => {
        this.tJlc = Boolean(parseInt(res.state));
      });
      getControls("s_d_01").then((res) => {
        this.oTfc = Boolean(parseInt(res.state));
      });
      getControls("s_d_02").then((res) => {
        this.tTfc = Boolean(parseInt(res.state));
      });
      getControls("s_e_01").then((res) => {
        this.oSfc = Boolean(parseInt(res.state));
      });
      getControls("s_e_02").then((res) => {
        this.tSfc = Boolean(parseInt(res.state));
      });

      getControls("s_f_00").then((res) => {
        this.oZfc = Boolean(parseInt(res.state));
      });
      getControls("s_f_01").then((res) => {
        this.Sfc1 = Boolean(parseInt(res.state));
      });
      getControls("s_f_02").then((res) => {
        this.Sfc2 = Boolean(parseInt(res.state));
      });
      getControls("s_f_03").then((res) => {
        this.Sfc3 = Boolean(parseInt(res.state));
      });
      getControls("s_f_04").then((res) => {
        this.Sfc4 = Boolean(parseInt(res.state));
      });
      getControls("s_f_05").then((res) => {
        this.Sfc5 = Boolean(parseInt(res.state));
      });
    },
    pushControl(vName) {
      putControls(vName, Number(event.target.checked)).then((res) => {
        if (res != null) {
          console.log("yes!!!");
        }
      });
    },
  },
  created() {
    this.init();
    setInterval(() => {
      this.init();
    }, 5000);
  },
};
</script>

<style scoped>
.ei-control {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px 0 5px 15px;
}
.ei-control .control-wrapper {
  width: 50%;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
}
.ei-control .control-wrapper .switch {
  margin-left: 25px;
}
.ei-control .control-title {
  margin-left: 5px;
}
.gg-control {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0 5px 15px;
}
.gg-control .control-wrapper:nth-child(2) .switch {
  margin-left: 38px;
}
.gg-control .control-wrapper {
  width: 50%;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
}
.gg-control .control-title {
  margin-left: 5px;
}
.cgqyc {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 10px;
  padding: 30px 15px 5px 15px;
}
.cgqyc .sensor-wrapper {
  width: 100%;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}
.cgqyc .sensor-wrapper .sensor-left {
  width: 45%;
  color: red;
}
.cgqyc .sensor-wrapper .sensor-left i {
  margin-right: 5px;
}
.cgqyc .sensor-wrapper .sensor-right {
  width: 45%;
  color: red;
  text-align: right;
}
.ncyj {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 10px;
  padding: 30px 15px 10px 15px;
}
.ncyj .sensor-wrapper .sensor-left {
  width: 45%;
  color: #f3902f;
}
.ncyj .sensor-wrapper .sensor-left i {
  margin-right: 5px;
}
.ncyj .sensor-wrapper .sensor-right {
  width: 45%;
  text-align: right;
  color: #f3902f;
}
.ncyj .sensor-wrapper {
  width: 100%;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin-top: 5px;
  padding: 0 5px;
  border-radius: 5px;
}
.ncyj .sensor-wrapper:nth-child(odd) {
  margin-top: 5px;
  padding: 0 5px;
  border-radius: 5px;
  background-color: #032759;
}
.weather-title {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: #00e4ff;
  font-weight: 500;
}
.switch {
  margin-left: 15px;
  top: 2px;
}
</style>