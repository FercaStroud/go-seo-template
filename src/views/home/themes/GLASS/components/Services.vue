<template lang="pug">
.container.mx-auto.my-5
  .title-primary-glass.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) {{ $store.state.settings.services_component_title }}
  .flex.flex-col.justify-center.items-center.text-center
    .features.flex.flex-wrap.justify-center.items-center
      a.flex.flex-col.justify-center.items-center.text-center.p-5.basis-full(
        class="basis-1/2 sm:basis-1/3 md:p-10",
        href="/services",
        v-for="(service, key) in $store.state.services",
        :key="key"
      )
        .img-container.flex.justify-center.items-center.p-2.h-10
          img(
            :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
            :alt="service.title"
          )
        p.font-black.text-base.mb-2(class="sm:text-lg md:text-xl lg:text-2xl")
          br/
          br/
          br/
          | {{ service.title }}
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
    this.$store.dispatch("loadServices");
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
