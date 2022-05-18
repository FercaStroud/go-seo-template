<template lang="pug">
.features-container.container.mx-auto
  .about.text-center.flex.flex-col.justify-center.items-center.gap-5.p-10.mt-10(class='sm:px-20')
    .features.flex.flex-row.flex-wrap.justify-center.my-10
      .feature.p-5.flex-col.text-center(
        v-for="(service, key) in $store.state.services", :key="key"
        class='basis-1/2 sm:basis-1/3 md:p-10'
      )
        p.text-xl.mb-5(class='sm:text-2xl lg:text-4xl')
          img(
            style="float:left;width:20px; margin-right:5px"
            :src='PUBLIC_ASSETS + "images/services/" + service.icon'
            :alt='service.title'
          )
        p.font-black.mb-2(class='sm:text-lg md:text-xl lg:text-2xl')
          | {{service.title}}


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
</style>
