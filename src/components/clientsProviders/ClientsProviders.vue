<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatClientsProviders.vue";
import SOBER from "./themes/SOBER/SoberClientsPRoviders.vue";
import GLASS from "./themes/GLASS/GlassClientsPRoviders.vue";

export default {
  name: "ClientsProviders",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
