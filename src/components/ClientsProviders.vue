<template lang="pug">
.container.mx-auto.text-center.p-2.my-5
  h3.font-black.text-2xl.mb-2(class="md:text-3xl") Nuestros clientes
  .flex.justify-between.items-center
    swiper.p-5.overflow-hidden(
      :slides-per-view="'auto'",
      :spaceBetween="10",
      :pagination="{ clickable: true }",
      :centeredSlides="true",
      :breakpoints="breakpoints",
      :autoplay="{ delay: 3000, disableOnInteraction: false }",
      :modules="modules"
    )
      swiper-slide(v-for="(slide, key) in slidesData", :key="key")
        .slide-container.flex.justify-center.items-center.p-2.h-64.mb-10
          img.slide.w-full.h-auto(:src="slide.src" :alt="slide.name")
</template>

<script>
const response = [
  {
    name: "image 1",
    src: "https://via.placeholder.com/500x500/FF0000/000000?text=image 1",
  },
  {
    name: "image 2",
    src: "https://via.placeholder.com/500x500/00FF00/000000?text=image 2",
  },
  {
    name: "image 3",
    src: "https://via.placeholder.com/500x500/0000FF/000000?text=image 3",
  },
  {
    name: "image 4",
    src: "https://via.placeholder.com/500x500/FF0000/000000?text=image 4",
  },
  {
    name: "image 5",
    src: "https://via.placeholder.com/500x500/00FF00/000000?text=image 5",
  },
  {
    name: "image 6",
    src: "https://via.placeholder.com/500x500/0000FF/000000?text=image 6",
  },
  {
    name: "image 7",
    src: "https://via.placeholder.com/500x500/FF0000/000000?text=image 7",
  },
  {
    name: "image 8",
    src: "https://via.placeholder.com/500x500/00FF00/000000?text=image 8",
  },
];

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "ClientsProviders",
  data() {
    return {
      slidesData: response,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
