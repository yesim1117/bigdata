<template>
  <div id="home">
    <Header></Header>
    <div class="content">
      <ContentLeft></ContentLeft>
      <ContentCenter></ContentCenter>
      <ContentRight></ContentRight>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import ContentLeft from "./ContentLeft";
import ContentCenter from "./ContentCenter";
import ContentRight from "./ContentRight";

export default {
  name: "Index",
  components: {
    Header,
    ContentLeft,
    ContentCenter,
    ContentRight
  },
}
</script>

<style scoped>
  .content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: calc(100vh - 80px);
    padding-top: 5px;
  }
  .home-left {
    display: flex;
    flex-flow: column;
    flex: 1;
    z-index: 99;
  }
  .home-center {
    flex: 2;
    margin-left: 8px;
  }
  .home-right {
    display: flex;
    flex-flow: column;
    flex: 1;
    margin-left: 10px;
    z-index: 99;
  }
</style>