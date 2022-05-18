<template lang="pug">
pre {{$store.state.posts}}
</template>

<script>
export default {
  name: "Blog",
  mounted() {
    this.$store.dispatch('loadPosts');
  },
  components: {
  },
};
</script>

<style scoped lang="scss">
</style>
