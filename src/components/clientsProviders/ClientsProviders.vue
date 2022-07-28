<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatClientsProviders.vue";
import SOBER from "./themes/SOBER/SoberClientsPRoviders.vue";

export default {
  name: "ClientsProviders",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
