<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatContact.vue";
import SOBER from "./themes/SOBER/SoberContact.vue";

export default {
  name: "Contact",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
