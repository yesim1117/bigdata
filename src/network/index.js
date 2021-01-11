import { request } from "./request";

let baseUrl = "/api";

export function getUnit() {
  return request({
    url: `${baseUrl}/unit/Jfc533C`
  });
}

export function getSensors() {
  return request({
    url: `${baseUrl}/data/unit/Jfc533C/s_b_01`
  });
}

export function getMetes() {
  return request({
    url: `${baseUrl}/data/unit/Jfc533C/s_a_01`
  });
}
// 土壤墒情
export function getMoisture() {
  return request({
    url: `${baseUrl}/data/unit/Jfc533C/s_g_01`
  });
}
// 联动
export function getControls(item) {
  return request({
    url: `${baseUrl}/data/unit/Jfc533C/${item}`
  });
}
export function putControls(item, state) {
  return request({
    url: `${baseUrl}/data/unit/Jfc533C/${item}/${state}`
  });
}