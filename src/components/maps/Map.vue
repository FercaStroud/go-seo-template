<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatMap.vue";

export default {
  name: "Map",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
