<template lang="pug">
.banner.mt-2.mb-5.py-5
  .container.mx-auto
    swiper(
      :keyboard="true"
      :navigation="true"
      :pagination="true",
      :autoplay="{ delay: 7500 }",
      :modules="modules"
    )
      swiper-slide(v-for="(slide, key) in $store.state.slides", :key="key")
        a(target="_blank" :href="slide.href")
          img.w-full.h-auto(
            :src="PUBLIC_ASSETS + 'images/slides/' + slide.src",
            :alt="slide.title"
          )
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
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
    this.$store.dispatch("loadSlides");

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
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #70d6ff;
  color: #222;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.banner {
  background-color: transparent;
  background-image: url("../../../assets/background.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img-container img {
  width: 100%;
  height: auto;
  /* box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07); */
}
</style>
