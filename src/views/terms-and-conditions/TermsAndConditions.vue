<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatTermsAndConditions.vue";
import SOBER from "./themes/SOBER/SoberTermsAndConditions.vue";

export default {
  name: "TermsAndConditions",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
