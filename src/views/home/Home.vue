<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatHome.vue";
import SOBER from "./themes/SOBER/SoberHome.vue";

export default {
  name: "Home",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
