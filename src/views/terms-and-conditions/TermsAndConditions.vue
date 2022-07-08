<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatTermsAndConditions.vue";

export default {
  name: "TermsAndConditions",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
