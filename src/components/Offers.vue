<template lang="pug">
.container.mx-auto.p-2(v-if="render")
  .offer.flex.justify-between.items-center.text-center.relative
    swiper.basis-full.p-5(
      :slides-per-view="1",
      :pagination="true",
      :centeredSlides="true",
      :autoplay="{ delay: 3000, disableOnInteraction: false }",
      :modules="modules"
    )
      swiper-slide(v-for="(offer,key) in $store.state.offers", :key="key")
        .flex.flex-col
          h2.font-black {{ offer.title }}
          p.text-sm.mb-5.description(v-html="offer.description")
    .absolute.offers-btn.w-12.h-full.flex.justify-center.items-center
      button.close.w-8.h-8(@click="closeOffer")
        font-awesome-icon(:icon="['fas', 'times']")
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "Offers",
  data() {
    return {
      render: true,
    };
  },
  mounted() {
    this.$store.dispatch("loadOffers");
  },
  methods: {
    closeOffer() {
      this.render = false;
    },
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

<style>
.offer {
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.028),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    2.2px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    4.2px 4.2px 33.4px rgba(0, 0, 0, 0.05), 10px 10px 80px rgba(0, 0, 0, 0.07);
}
.offers-btn {
  top: 0;
  right: 0;
}
.close {
  color: #d30000;
  transition: color 0.35s ease;
}
.close:hover {
  color: #ff0a0a;
}
.description a {
  text-decoration: underline solid 3px #d30000;
  transition: text-decoration 0.35s ease;
}
.description a:hover {
  text-decoration: underline solid 3px #ff0a0a;
}
</style>
