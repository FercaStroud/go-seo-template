<template lang="pug">
.bg-sober-alt.container.mx-auto.text-center.p-2.my-5
  .title-primary-sober.text-center.font-black.text-2xl.my-2.p-2(
    class="sm:text-3xl sm:p-0"
  ) {{ $store.state.settings.clients_component_title }}
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
      swiper-slide(v-for="(client, key) in $store.state.clients", :key="key")
        .slide-container.flex.justify-center.items-center.p-2.h-64.mb-10
          img.slide.w-full.h-auto(:src="PUBLIC_ASSETS + 'images/clients/' + client.src", :alt="client.name")
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "SoberClientsProviders",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
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
  mounted() {
    this.$store.dispatch("loadClients");
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
