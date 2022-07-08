<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatClientsProviders.vue";

export default {
  name: "ClientsProviders",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
