import Vue from "vue";
import Vuex from "vuex";
import { getUnit, getSensors, getMetes, getMoisture } from "@/network/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    farms: [],
    sensors: [],
    metes: [],
    moistures: []
  },
  mutations: {
    getState(state) {
      getUnit().then(res => {
        state.farms = res;
      });
      getSensors().then(res => {
        state.sensors = res;
      });
      getMetes().then(res => {
        state.metes = res;
      });
      getMoisture().then(res => {
        state.moistures = res;
      });
    }
  },
  actions: {},
  modules: {}
});
