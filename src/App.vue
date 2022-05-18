<template lang="pug">
div
  Preloader
  metainfo
    template(v-slot:title="{ content }") {{ content ? '${content} | SITE_NAME' : 'SITE_NAME' }}
  Navbar
  router-view
  Footer
</template>

<script>
import { useMeta } from "vue-meta";
import Navbar from "./components/Navbar.vue";
import Preloader from "./components/Preloader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {Footer, Preloader, Navbar},
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "es-MX", amp: true },
    });
  },
  mounted() {
    this.$store.dispatch('loadPageSettings');
  },
};
</script>
