<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPortfolio.vue";
import SOBER from "./themes/SOBER/SoberPortfolio.vue";

export default {
  name: "Portfolio",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
