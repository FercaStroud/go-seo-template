<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatMap.vue";
import SOBER from "./themes/SOBER/SoberMap.vue";
import GLASS from "./themes/GLASS/GlassMap.vue";

export default {
  name: "Map",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
