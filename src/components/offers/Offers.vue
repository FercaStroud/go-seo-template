<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatOffers.vue";
import SOBER from "./themes/SOBER/SoberOffers.vue";
import GLASS from "./themes/GLASS/GlassOffers.vue";

export default {
  name: "Offers",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
