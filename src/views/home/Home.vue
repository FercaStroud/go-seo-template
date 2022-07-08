<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatHome.vue";

export default {
  name: "Home",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
