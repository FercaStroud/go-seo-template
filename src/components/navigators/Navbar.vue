<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from './themes/FLAT/navigator.vue'

export default {
  name: "Navbar",
  components: {
    FLAT
  },
  data() {
    return {
      theme: null,
    }
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
