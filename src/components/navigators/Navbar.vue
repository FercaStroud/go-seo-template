<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/navigator.vue";
import SOBER from "./themes/SOBER/navigator.vue";
import GLASS from "./themes/GLASS/navigator.vue";

export default {
  name: "Navbar",
  components: {
    FLAT,
    SOBER,
    GLASS,
  },
  data() {
    return {
      theme: null,
    };
  },
  mounted() {},
};
</script>

<style scoped>
</style>
