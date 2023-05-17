<template lang="pug">
swiper.cover-container.d-flex.w-100.h-100.mx-auto.flex-column(
  :keyboard="true"
  :navigation="true"
  :pagination="true",
  :autoplay="{ delay: 10500 }",
  :modules="modules"
  data-aos="fade-down"
)
  swiper-slide(v-for="(slide, key) in $store.state.slides", :key="key")
    img.w-100.h-auto(
      :src="PUBLIC_ASSETS + 'images/slides/' + slide.src",
      :alt="slide.title"
    )
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination, Navigation, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "Banner",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadSlides").then(function () {
      AOS.init();
    })

  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Keyboard],
    };
  },
};
</script>

<style scoped>
.img-container img {
  width: 100%;
  height: auto;
  /* box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07); */
}
</style>
