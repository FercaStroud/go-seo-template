<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatContact.vue";

export default {
  name: "Contact",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
