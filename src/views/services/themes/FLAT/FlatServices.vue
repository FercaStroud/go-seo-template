<template lang="pug">
.container-fluid.my-(data-aos="fade-down" style="margin-top:50px")

  .row.my-4
    .col-md-4.col-sm-12.my-1(
      v-for="(service, key) in $store.state.services",
      :key="key"
      data-aos="fade-down"
    )
      .me-md-3.pt-3.px-3.pt-md-5.px-md-5.text-center.overflow-hidden
        p
          img(
            style="max-width:100%"
            :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
            :alt="service.title"
          )
        img(
          style="max-width:100%"
          :src="'/d'+(key+1)+'.png'",
        )
  .row
    img(
      style="max-width:100%"
      :src="'/enmCOMPONEN.png'",
    )
  .row
    img(
      style="max-width:100%"
      :src="'/BANNER.png'",
    )
  .row
    img(
      style="max-width:100%"
      :src="'/enmBANNERSERVICIO.png'",
    )
</template>

<script>
export default {
  name: "FlatServices",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadServices").then(function (){
      AOS.init();
    })
    window.scrollTo(0,0);
  },
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../../../styles/quill-core.css";
.content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5.5rem;
  }
}

.img-container {
  max-width: 40px;
  max-height: 40px;
}
.img-container img {
  width: 100%;
  height: auto;
}

</style>
