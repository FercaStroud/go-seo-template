<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/FlatBlog.vue";
import SOBER from "./themes/SOBER/SoberBlog.vue";
import GLASS from "./themes/GLASS/GlassBlog.vue";

export default {
  name: "Blog",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
};
</script>

<style scoped>
</style>
