import { request } from './request'

let mlocation = 101220101
let mkey = '4509c18daddc469a88ca3da3035e5699'

// 获取合肥市当天天气预报
export function getWeatherNow () {
  return request({
    url: `https://devapi.heweather.net/v7/weather/now?location=${mlocation}&key=${mkey}`
  })
}