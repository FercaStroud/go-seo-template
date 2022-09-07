<template lang="pug">
.container.mx-auto.text-center.p-2.my-5(style="background-color: #eee;")
  .title-primary-flat.text-center.font-black.text-2xl.my-5.p-2(
    class="sm:text-3xl sm:p-0"
  ) {{ $store.state.settings.clients_component_title }}

  .flex.justify-between.items-center
    swiper.p-5.overflow-hidden(
      :slidesPerView="3",
      :spaceBetween="20",
      :pagination="{ clickable: true }",
      :centeredSlides="true",
      :autoplay="{ delay: 3000, disableOnInteraction: false }",
      :modules="modules"
    )
      swiper-slide(v-for="(client, key) in $store.state.clients", :key="key")
        .slide-container.flex.justify-center.items-center.p-2.mb-10
          img.slide.w-auto.h-full(:src="PUBLIC_ASSETS + 'images/clients/' + client.src", :alt="client.name")
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "FlatClientsProviders",
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
