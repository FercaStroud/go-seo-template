<template lang="pug">
pre {{$store.state.images}}
</template>

<script>
export default {
  name: "Portfolio",
  mounted() {
    this.$store.dispatch('loadPortfolio');
  },
  components: {
  },
};
</script>

<style scoped lang="scss">
</style>
