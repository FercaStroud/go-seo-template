<template>
  <div class="sober fade-in">
    <Navbar />
    <Banner />
    <Features />
    <Descriptions />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Features from "./components/Features.vue";
import Descriptions from "./components/Descriptions.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "SoberBlack",
  components: {
    Navbar,
    Banner,
    Features,
    Descriptions,
    Footer,
  },
};
</script>

<style scoped>
</style>