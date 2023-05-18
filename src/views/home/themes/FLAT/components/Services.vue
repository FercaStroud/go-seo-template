<template lang="pug">
.container.my-(data-aos="fade-down")
  h1.text-center() {{ $store.state.settings.services_component_title }}
  .row.my-4
    .col-md-4.col-sm-12.my-1(
      v-for="(service, key) in $store.state.services",
      :key="key"
      data-aos="fade-down"
    )
      .text-bg-light.me-md-3.pt-3.px-3.pt-md-5.px-md-5.text-center.overflow-hidden
        .my-3.py-3
          p
            img.my-3(
              style="width: 100%"
              :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
              :alt="service.title"
            )
          router-link(:to="'/service/'+service.id").btn.primary-button(:href="'/service/'+service.id") Más Detalles



</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadServices").then(function (){
        AOS.init();
    })
  },
};
</script>

<style scoped>
.img-container {
  max-width: 200px;
  max-height: 200px;
}
.img-container img {
  width: 100%;
  height: auto;
}
</style>
