<template lang="pug">
.container.my-5.pt-5(data-aos="fade-down")
  h1.pt-5.text-center() {{ $store.state.settings.portfolio_component_title }}

  .row
    .col-md-4.col-sm-12.my-2(v-for="(image, key) in $store.state.images" :key="key")
      img.img-fluid.pointer(
        :src="PUBLIC_ASSETS + 'images/portfolios/' + image.src",
        :alt="modalTitle"
        @click="modalImage=image;showModal = true;"
      )
      .text-center
        span {{ image.title.length >= 35 ? image.title.substring(0, 35) + '...' : image.title }}

  vue-final-modal(v-model="showModal")
    .container
      button.btn.close-modal(@click="showModal = false") Cerrar

      .row.my-5.pt-5.justify-content-md-center
        .col-md-12.pt-5(style="text-align:center;")
          br/
          br/
          strong.color-white.pt-5(style="text-align:center;font-size:2em") {{modalImage.title}}
      .row.justify-content-md-center
        .col-md-6.col-sm-12
          img.img-fluid(
            :src="PUBLIC_ASSETS + 'images/portfolios/' + modalImage.src",
            :alt="modalImage.title"
          )
</template>

<script>
export default {
  name: "FlatPortfolio",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      showModal: false,
      modalTitle: "",
      modalImage: [],
    };
  },
  mounted() {
    let vm = this;
    this.$store.dispatch("loadPortfolio").then(function (){
      vm.$forceUpdate;
    });
  },
  methods: {
  },
  components: {},
};
</script>

<style scoped lang="scss">
.close-modal{
  position: fixed;
  top: 108px;
  right: 9px;
  background: white;
}
</style>
