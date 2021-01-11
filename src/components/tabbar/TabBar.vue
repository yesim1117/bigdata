<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: absolute;
  top: 0;
}
</style>