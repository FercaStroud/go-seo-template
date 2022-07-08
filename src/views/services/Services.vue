<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatServices.vue";

export default {
  name: "Services",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
