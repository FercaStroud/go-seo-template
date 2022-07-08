<template lang="pug">
component(:is="$store.state.settings.theme_name")
</template>

<script>
import FLAT from './themes/FLAT/theFooter.vue'

export default {
  name: "TheFooter",
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
