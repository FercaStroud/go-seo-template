<template>
  <div class="sober fade-in">
    <Navbar />
    <Banner />
    <Features />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Features from "./components/Features.vue";

export default {
  name: "SoberBlack",
  components: {
    Navbar,
    Banner,
    Features,
  },
};
</script>

<style scoped>
</style>