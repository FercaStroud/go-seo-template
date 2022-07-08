<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatOffers.vue";

export default {
  name: "Offers",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
