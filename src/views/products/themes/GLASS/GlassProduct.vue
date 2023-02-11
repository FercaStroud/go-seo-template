<template lang="pug">
.container.my-5.pt-5(data-aos="fade-down")
  h1.pt-5.text-center() {{ $store.state.settings.products_component_title }}

  .row
    .col
      pre {{ $store.state.products }}

</template>

<script>
export default {
  name: "FlatProduct",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  methods: {
  },
  components: {},
};
</script>

<style scoped lang="scss">
</style>
