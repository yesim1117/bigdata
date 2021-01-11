<template>
  <!-- <div ref="swiperBox" class="swiperBox"> -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test1.jpg" alt=""
      /></swiper-slide>
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test4.jpg" alt=""
      /></swiper-slide>
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test5.jpg" alt=""
      /></swiper-slide>
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test6.jpg" alt=""
      /></swiper-slide>
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test2.jpg" alt=""
      /></swiper-slide>
      <swiper-slide class="slideBox"
        ><img src="../../assets/images/test3.jpg" alt=""
      /></swiper-slide>
    </swiper>
    <!-- <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div> -->
  <!-- </div> -->
</template>

<script>
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "IndexSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    Swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        // 一个屏幕展示的数量
        slidesPerView: 3,
        slidesPerGroup: 1,
        // 设定初始化时slide的索引
        initialSlide: 0,
        //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: "horizontal",
        //循环
        loop: true,
        // autoplay: {
        //   delay: 1000, 
        //   disableOnInteraction: false
        //  },
        // 箭头配置
        // navigation: {
        //   prevEl: ".swiper-button-prev",
        //   nextEl: ".swiper-button-next",
        // },
        // 间距
        spaceBetween: 15,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true,
      },
    };
  },
  methods: {
    // prev() {
    //   this.$refs.mySwiper.$swiper.slidePrev();
    // },
    // next() {
    //   this.$refs.mySwiper.$swiper.slideNext();
    // },
  },
};
</script>
<style scoped>
.swiper-container {
  height: 100%;
}
.swiper-slide img {
  width: 100%;
}
/* .swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
  content: "";
} */

/* .swiper-button-prev {
  background: url("../../assets/images/swiper/sw-left.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: -40px;
  top: 100px;
}
.swiper-button-next {
  background: url("../../assets/images/swiper/sw-right.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: -40px;
  top: 100px;
} */
</style>