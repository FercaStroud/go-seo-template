<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatBlog.vue";
import SOBER from "./themes/SOBER/SoberBlog.vue";

export default {
  name: "Blog",
  components: {
    FLAT,
    SOBER,
  },
};
</script>

<style scoped>
</style>
