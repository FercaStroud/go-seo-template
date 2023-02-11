<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from "./themes/FLAT/theFooter.vue";
import SOBER from "./themes/SOBER/theFooter.vue";
import GLASS from "./themes/GLASS/theFooter.vue";

export default {
  name: "TheFooter",
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
