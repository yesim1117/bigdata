<template>
  <div class="home-left">
    <div class="weather-station">
      <div class="weather-title">小型气象站</div>

      <div class="type-div">
        <i class="iconfont icon-wendu"></i>
        <span class="type-title">空气温度</span>
        <span class="type-num">{{ $store.state.metes.airTemperature }}°</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-fengsu"></i>
        <span class="type-title">风速</span>
        <span class="type-num">{{ $store.state.metes.windSpeed }}</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-wenshidu"></i>
        <span class="type-title">空气湿度</span>
        <span class="type-num">{{ $store.state.metes.airHumidity }}%</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-zu"></i>
        <span class="type-title">风向</span>
        <span class="type-num">{{ $store.state.metes.windDirection }}</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-rizhao"></i>
        <span class="type-title">日照时长</span>
        <span class="type-num">{{ $store.state.metes.sunshine }}h</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-qiya"></i>
        <span class="type-title">大气压</span>
        <span class="type-num">{{ $store.state.metes.atmos }}kPa</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-guangzhaoqiangdu"></i>
        <span class="type-title">光照强度</span>
        <span class="type-num">{{ $store.state.metes.light }}Lx</span>
      </div>

      <div class="type-div">
        <i class="iconfont icon-jiangyuliang"></i>
        <span class="type-title">降雨量</span>
        <span class="type-num">{{ $store.state.metes.rainfall }}mm</span>
      </div>
    </div>
    <div class="temperature">
      <div class="weather-title">温度监控</div>
      <BarChar id="indexBar" :option="indexBar"></BarChar>
    </div>
    <div class="soil-moisture">
      <div class="weather-title">土壤墒情</div>
      <LineChart id="indexLine" :option="indexLine"></LineChart>
    </div>
  </div>
</template>

<script>
import BarChar from "../../components/echarts/MyEchart";
import LineChart from "../../components/echarts/MyEchart";
import {
  getSensors,
  getMoisture,
  getControls,
  putControls,
} from "@/network/index";

export default {
  name: "ContentLeft",
  data() {
    return {
      indexBar: {
        grid: {
          left: "20px",
          right: "-20px",
          bottom: "-10px",
          top: "43px",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return (
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].name +
              " : " +
              Number(params[0].value) +
              "<br/>"
            );
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "12",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: [
              "室外温度(℃)",
              "室外湿度(%)",
              "室内日照(Lx)",
              "室内温度(℃)",
              "室内湿度(%)",
              "二氧化碳(　)",
            ],
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "10",
              },
              formatter: function (value) {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + "万";
                } else {
                  return value.toLocaleString();
                }
              },
            },
            data: [50000000, 50000000, 50000000, 50000000, 50000000],
          },
        ],
        series: [
          {
            name: "tig",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(0,177,204,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0,93,140,1)",
                  },
                ]),
              },
            },
            barWidth: 17,
            data: [
              this.$store.state.sensors.outTemperature,
              this.$store.state.sensors.outHumidity,
              this.$store.state.sensors.inSunshine,
              this.$store.state.sensors.inTemprature,
              this.$store.state.sensors.inHumidity,
              this.$store.state.sensors.carbonDioxide,
            ],
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 17,
            barGap: "-100%",
            data: [100, 100, 100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
                barBorderRadius: 10,
                borderColor: "rgba(1,159,211,1)",
              },
            },
          },
        ],
      },
      indexLine: {
        grid: {
          left: "20px",
          right: "15px",
          bottom: "0px",
          top: "75px",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#dddc6b",
            },
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            show: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
                align: "left",
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.2)",
              },
            },
            data: [
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-27 00:00",
              "10-18 00:00",
              "10-19 00:00",
              "10-20 00:00",
              "10-21 00:00",
              "10-22 00:00",
              "10-23 00:00",
              "10-24 00:00",
              "10-25 00:00",
              "10-26 00:00",
              "10-11 00:00",
            ],
          },
          {
            axisPointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            position: "bottom",
            offset: 20,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "空气温度/℃",
            max: 60,
            nameTextStyle: {
              color: "#396A87",
              fontSize: 12,
            },
            axisTick: {
              show: true,
            },
            position: "left",
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
          {
            type: "value",
            max: 100,
            name: "空气湿度/%",
            nameTextStyle: {
              color: "#396A87",
              fontSize: 12,
            },
            axisTick: {
              show: true,
            },
            position: "right",
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "温度℃",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#00d887",
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
            itemStyle: {
              normal: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            data: [],
          },
          {
            name: "湿度%",
            type: "line",
            smooth: true,
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
            },
            itemStyle: {
              normal: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  components: {
    BarChar,
    LineChart,
  },
  methods: {
    refreshData() {
      let data = [];
      getSensors().then((res) => {
        data = [
          res.outTemperature,
          res.outHumidity,
          res.inSunshine,
          res.inTemprature,
          res.inHumidity,
          res.carbonDioxide,
        ];
        this.indexBar.series[0].data = data;
      });
    },
    lineData() {
      getMoisture().then((res) => {
        this.indexLine.series[0].data.push(
          parseFloat(res.soilTemperature) * Math.random().toFixed(2)
        );
        this.indexLine.series[1].data.push(
          parseFloat(res.soilHumidity) * Math.random().toFixed(2)
        );
      });
    },
  },
  created() {
    this.refreshData();
    this.lineData();
    setInterval(() => {
      this.refreshData();
    }, 5000);
    setInterval(() => {
      this.lineData();
    }, 3000);
  },
};
</script>

<style scoped>
.weather-station {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  padding: 45px 10px 0 20px;
}
.type-div {
  font-size: 10px;
  line-height: 20px;
  width: 50%;
}
.type-title {
  font-size: 10px;
  margin-left: 5px;
}
.type-num {
  font-size: 10px;
  margin-left: 10px;
}
.weather-station .type-div:nth-child(3) .type-num,
.weather-station .type-div:nth-child(5) .type-num {
  margin-left: 22px;
}
.weather-title {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: #00e4ff;
  font-weight: 500;
}
.temperature {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 10px;
}
.soil-moisture {
  width: 100%;
  flex: 1;
  background: url("../../assets/images/item_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 10px;
}
</style>