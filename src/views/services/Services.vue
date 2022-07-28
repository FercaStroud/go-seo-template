<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatServices.vue";
import SOBER from "./themes/SOBER/SoberServices.vue";

export default {
  name: "Services",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
