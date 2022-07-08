<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPreloader.vue";

export default {
  name: "Preloader",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
