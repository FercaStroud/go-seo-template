<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatContact.vue";
import SOBER from "./themes/SOBER/SoberContact.vue";
import GLASS from "./themes/GLASS/GlassContact.vue";

export default {
  name: "Contact",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
