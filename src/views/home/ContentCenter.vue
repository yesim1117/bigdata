<template>
  <div class="home-center">
    <div class="chart">
      <IndexMap id="indexMap" :option="indexMap"></IndexMap>
    </div>
    <div class="inventory">
      <div class="weather-title">资产盘点</div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/sfj.png" alt="">
        <span class="sbname">水肥机</span>
        <span class="sbnum">82</span>
      </div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/tfj.png" alt="">
        <span class="sbname">通风机</span>
        <span class="sbnum">32</span>
      </div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/slj.png" alt="">
        <span class="sbname">湿帘机</span>
        <span class="sbnum">32</span>
      </div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/sf.png" alt="">
        <span class="sbname">水阀</span>
        <span class="sbnum">32</span>
      </div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/jksb.png" alt="">
        <span class="sbname">监控设备</span>
        <span class="sbnum">32</span>
      </div>
      <div class="inventory-item">
        <img src="../../assets/images/inventory-icon/cgq.png" alt="">
        <span class="sbname">传感器</span>
        <span class="sbnum">32</span>
      </div>
    </div>
  </div>
</template>

<script>

import IndexMap from "../../components/echarts/MyEchart";
import {
  getSensors,
  getMoisture,
  getControls,
  putControls,
} from "@/network/index";
var mapName = "china";

var data = [
  // {name:"南京",value:82},
  // {
  //   name: "九江",
  //   value: 68,
  // },
  // {name:"上海",value:66},
  // {name:"中山",value:64},
  // {name:"临沂",value:62},
  // {name:"丹东",value:60},
  // {name:"北京",value:58},
  // {name:"南通",value:56},
  {
    name: "合肥",
    value: 54,
  },
  // {name:"唐山",value:52},
  // {name:"天津",value:50},
  // {name:"宁波",value:48},
  // {name:"宿迁",value:46},
  // {name:"常州",value:44},
  // {name:"延安",value:42},
  // {name:"徐州",value:40},
  // {name:"成都",value:38},
  // {name:"扬州",value:36},
  // {name:"无锡",value:34},
  // {name:"武汉",value:32},
  // {name:"泉州",value:30},
  // {name:"泰州",value:28},
  // {name:"淮安",value:26},
  // {name:"菏泽",value:24},
  // {name:"西宁",value:22},
  // {name:"西安",value:20},
  // {name:"郑州",value:18},
  // {name:"重庆",value:16},
  // {name:"镇江",value:14},
  // {name:"长沙",value:12},
  // {name:"青岛",value:10},
];
var geoCoordMap = {
  // '南京': [118.8062, 31.9208],
  // 九江: [116.0, 29.7],
  // '上海': [121.4648, 31.2891],
  // '中山': [113.4229, 22.478],
  // '临沂': [118.3118, 35.2936],
  // '丹东': [124.541, 40.4242],
  // '北京': [116.4551, 40.2539],
  // '南通': [121.1023, 32.1625],
  合肥: [117.29, 32.0581],
  // '唐山': [118.4766, 39.6826],
  // '天津': [117.4219, 39.4189],
  // '宁波': [121.5967, 29.6466],
  // '宿迁': [118.5535, 33.7775],
  // '常州': [119.4543, 31.5582],
  // '延安': [109.1052, 36.4252],
  // '徐州': [117.5208, 34.3268],
  // '成都': [103.9526, 30.7617],
  // '扬州': [119.4653, 32.8162],
  // '无锡': [120.3442, 31.5527],
  // '武汉': [114.3896, 30.6628],
  // '泉州': [118.3228, 25.1147],
  // '泰州': [120.0586, 32.5525],
  // '淮安': [118.927, 33.4039],
  // '菏泽': [115.6201, 35.2057],
  // '西宁': [101.4038, 36.8207],
  // '西安': [109.1162, 34.2004],
  // '郑州': [113.4668, 34.6234],
  // '重庆': [107.7539, 30.1904],
  // '镇江': [119.4763, 31.9702],
  // '长沙': [113.0823, 28.2568],
  // '青岛': [120.4651, 36.3373]
};
var toolTipData = [
  {
    name: "合肥",
    value: [
      {
        name: "湖南宁乡县中心试验农场",
      },
    ],
  },
];
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};
export default {
  name: 'ContentCenter',
  data() {
    return {
      indexMap: {
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            if (typeof params.value[2] == "undefined") {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  // toolTiphtml += toolTipData[i].name + "：";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml += toolTipData[i].value[j].name + "<br>";
                  }
                }
              }
              return toolTiphtml;
            } else {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  // toolTiphtml += toolTipData[i].name + "：<br>";
                  // toolTiphtml;
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml += toolTipData[i].value[j].name + "<br>";
                  }
                }
              }
              return toolTiphtml;
            }
          },
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            emphasis: {
              areaColor: "#2B91B7", //'#2B91B7'
            },
          },
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                //formatter: '{@[2]}',
                position: "right",
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
              color: "#05C3F9", //#409EFF  #05C3F9
              },
            },
          },

          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: data,
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 5)
            ),
            symbolSize: function (val) {
              return val[2] / 5;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow",
              },
            },
            zlevel: 1,
          },
        ],
      },
    }
  },
  components: {
    IndexMap,
  },
}
</script>

<style scoped>
  .home-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 9;
  }
  .chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9;
  }
  .inventory {
    width: 100%;
    background: url('../../assets/images/item_bg.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    padding: 32px 15px 6px 15px;
  }
  .inventory-item {
    line-height: 22px;
  }
  .inventory-item img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .inventory-item .sbname {
    font-size: 10px;
    margin-left: 7px;
  }
  .inventory-item .sbnum {
    float: right;
    color: #00e4ff;
    font-size: 10px;
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
</style>