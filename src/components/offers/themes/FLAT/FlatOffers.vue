<template lang="pug">
vue-final-modal(v-model="render").offers
  .container
    button.btn.primary-button.hover-secondary.close-modal(@click="render = false") Cerrar
    .row.pt-5.justify-content-md-center
      .col-md-6.pt-5
        swiper.pt-5(
          v-show="render"
          :autoplay="{ delay: 7500 }",
          style=""
          :modules="modules"
          :slides-per-view="1",
          :pagination="{ clickable: true }",
          :centeredSlides="true",
        )
          swiper-slide(v-for="(offer,key) in $store.state.offers", :key="key")
            a(target="_blank" :href="offer.href")
              img.img-fluid(
                style=""
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
  name: "FlatOffers",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      render: false,
    };
  },
  mounted() {
    let vm = this;
    this.$store.dispatch("loadOffers").then(function () {
      if ((vm.$store.state.offers).length > 0) {
        vm.render = true;
      }
    });
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
.close-modal {
  margin-left: 50%;
  left: 111.08px;
  top: 183px;
  position: relative;
  z-index: 9999999;
}

@media (max-width: 991px) {
  .offers {
    margin-top: 150px;

  }
}

</style>
