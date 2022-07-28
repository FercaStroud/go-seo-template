<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPrivacyPolicy.vue";
import SOBER from "./themes/SOBER/SoberPrivacyPolicy.vue";

export default {
  name: "PrivacyPolicy",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
