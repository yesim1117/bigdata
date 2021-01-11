<template>
  <div class="tab-bar-item" :class="{active: isActive}" @click="itemClick">
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  },
};
</script>

<style scoped>
  .tab-bar-item {
    line-height: 30px;
    padding: 0 20px;
    background: url('../../assets/images/2.png') no-repeat;
    background-size: 100% 30px;
  }
</style>