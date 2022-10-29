<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatProduct.vue";
import SOBER from "./themes/SOBER/SoberProduct.vue";
import GLASS from "./themes/GLASS/GlassProduct.vue";

export default {
  name: "Product",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
