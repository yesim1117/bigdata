<template>
  <div :id="id" :style="style"></div>
</template>

<script>
export default {
  name: "MyEchart",
  data() {
    return {
      mychart: null,
    };
  },
  props: {
    id: {
      type: String,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    option: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  methods: {
    init() {
      this.mychart = this.$echarts.init(document.getElementById(this.id));
      this.mychart.setOption(this.option);
      window.addEventListener("resize", this.mychart.resize);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (this.mychart) {
          if (newVal) {
            this.mychart.setOption(newVal);
          } else {
            this.mychart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true,
    },
  },
};
</script>