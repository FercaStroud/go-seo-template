<template lang="pug">
.content.flex.flex-col.items-center.relative.container.mx-auto
  h1.title-primary-glass.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) Servicios
  .flex.flex-wrap.container.mx-auto
    .flex.flex-col.justify-center.items-center.basis-full.p-2(
      class="sm:basis-1/2 lg:basis-1/3 lg:p-5"
      v-for="(service, key) in $store.state.services",
      :key="key"
    )
      .img-container.flex.justify-center.items-center.h-20.mb-2
        img(
          :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
          :alt="service.title"
        )
      h2.font-black.text-xl.mb-2(class="sm:text-xl md:text-2xl") {{ service.title }}
      .ql-editor(v-html="service.description" )
</template>

<script>
export default {
  name: "GlassServices",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadServices");
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
