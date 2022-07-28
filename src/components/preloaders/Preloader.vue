<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPreloader.vue";
import SOBER from "./themes/SOBER/SoberPreloader.vue";

export default {
  name: "Preloader",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
