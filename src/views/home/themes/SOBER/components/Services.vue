<template lang="pug">
.container.mx-auto.my-5
  .title-primary-sober.text-center.font-black.text-2xl.mt-2.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) {{ $store.state.settings.services_component_title }}
  .flex.flex-wrap.justify-center.items-center
    .feature.p-5(
      class="basis-1/2 sm:basis-1/3",
      v-for="(service, key) in $store.state.services",
      :key="key"
    )
      a.bg-sober-alt.card.flex.flex-col.justify-center.items-center.p-2(href="/services")
        .img-container.mb-2
          img(
            :src="PUBLIC_ASSETS + 'images/services/' + service.icon",
            :alt="service.title"
          )
        h2.title-primary-sober.font-black.text-base(class="sm:text-lg md:text-xl lg:text-2xl") {{ service.title }}
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

<style lang="scss" scoped>
.card {
  min-height: 150px;
  transition: opacity 0.35s ease;
  &:hover {
    opacity: 0.8;
  }
}
.img-container {
  max-width: 40px;
  max-height: 40px;
  img {
    width: 100%;
  height: auto;
  }
}
</style>
