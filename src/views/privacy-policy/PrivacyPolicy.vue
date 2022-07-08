<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatPrivacyPolicy.vue";

export default {
  name: "PrivacyPolicy",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
