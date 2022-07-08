<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPortfolio.vue";

export default {
  name: "Portfolio",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
