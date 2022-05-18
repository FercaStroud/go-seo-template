<template lang="pug">
pre {{$store.state.services}}
</template>

<script>
export default {
  name: "Services",
  mounted() {
    this.$store.dispatch('loadServices');
  },
  components: {
  },
};
</script>

<style scoped lang="scss">
</style>
