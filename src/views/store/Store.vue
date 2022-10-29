<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatStore.vue";
import SOBER from "./themes/SOBER/SoberStore.vue";
import GLASS from "./themes/GLASS/GlassStore.vue";

export default {
  name: "Store",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
