<template lang="pug">
.container.mx-auto(v-if="render && $store.state.offers")
  .offer.flex.justify-between.items-center.text-center.relative
    swiper.basis-full(
      style="max-width:700px"
      :autoplay="{ delay: 7500 }",
      :modules="modules"
      :slides-per-view="1",
      :pagination="{ clickable: true }",
      :centeredSlides="true",
    )
      swiper-slide(v-for="(offer,key) in $store.state.offers", :key="key")
        .offers-btn.w-12.h-full
          button.close.w-8.h-8(@click="closeOffer")
            font-awesome-icon(:icon="['fas', 'times']")
        a(target="_blank" :href="offer.href")
          img.w-full.h-auto(
            data-mdb-ripple="true"
            :src="PUBLIC_ASSETS + 'images/offers/' + offer.src",
            :alt="offer.title"
          )


</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "GlassOffers",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
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

<style scoped>
.offer {
  position: relative;
  top: -15px;
}

.offers-btn {
  position: relative;
  float: right;
  top: 30px;
}

.close {
  color: #df4570;
  transition: color 0.35s ease;
  z-index: 1;
}
</style>
