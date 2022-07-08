<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatBlog.vue";

export default {
  name: "Blog",
  components: {
    FLAT,
  },
};
</script>

<style scoped>
</style>
