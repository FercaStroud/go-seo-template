<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPortfolio.vue";
import SOBER from "./themes/SOBER/SoberPortfolio.vue";
import GLASS from "./themes/GLASS/GlassPortfolio.vue";

export default {
  name: "Portfolio",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
