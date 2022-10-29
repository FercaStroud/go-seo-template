<template lang="pug">
.container.my-5
  h1.text-center() {{ $store.state.settings.clients_component_title }}

  swiper.w-100(
    :slidesPerView="4",
    :spaceBetween="20",
    :pagination="{ clickable: true }",
    :centeredSlides="true",
    :autoplay="{ delay: 3000, disableOnInteraction: false }",
    :modules="modules"
  )
    swiper-slide(v-for="(client, key) in $store.state.clients", :key="key")
      img.w-100(:src="PUBLIC_ASSETS + 'images/clients/' + client.src", :alt="client.name")
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
