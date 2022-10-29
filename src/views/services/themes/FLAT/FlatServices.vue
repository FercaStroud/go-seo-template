<template lang="pug">
.container.my-5.pt-5(data-aos="fade-down")
  h1.pt-5.text-center() {{ $store.state.settings.services_component_title }}
  .row
    .col-md-12.col-sm-12.text-center(
      class=""
      v-for="(service, key) in $store.state.services",
      :key="key"
    )
      p.text-center
        img.img-fluid(
          :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
          :alt="service.title"
        )
      h2.font-black.text-xl.mb-2(class="sm:text-xl md:text-2xl") {{ service.title }}
      .ql-editor(v-html="service.description" )
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
