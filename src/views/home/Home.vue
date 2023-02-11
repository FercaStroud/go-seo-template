<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatHome.vue";
import SOBER from "./themes/SOBER/SoberHome.vue";
import GLASS from "./themes/GLASS/GlassHome.vue";

export default {
  name: "Home",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
