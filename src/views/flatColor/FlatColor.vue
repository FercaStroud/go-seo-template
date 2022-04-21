<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content">
      <Banner />
      <Features />
      <FAQ />
      <Description />
    </div>
    <Footer />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import Features from "./components/Features.vue";
import FAQ from "./components/FAQ.vue";
import Description from "./components/Description.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "FlatColor",
  setup() {
    useMeta({
      title: "Template 1 home",
      htmlAttrs: { lang: "es-MX", amp: true },
    });
  },
  components: {
    Navbar,
    Banner,
    Features,
    FAQ,
    Description,
    Footer,
  },
};
</script>

<style scoped>
.content {
  margin-top: 4rem;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5rem;
  }
}
</style>
