<template lang="pug">
div
  Preloader
  metainfo
    template(v-slot:title="{ content }") {{ content ? content + ' | ' + SITE_NAME : SITE_NAME }}
  Navbar
  router-view
  Footer
</template>

<script>
import { useMeta } from "vue-meta";
import Navbar from "./components/navigators/Navbar.vue";
import Preloader from "./components/preloaders/Preloader.vue";
import Footer from "./components/footers/Footer.vue";

export default {
  name: "App",
  components: {Footer, Preloader, Navbar},
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "es-MX", amp: true },
    });
  },
  data() {
    return {
      SITE_NAME: import.meta.env.VITE_TITLE_DOMAIN,
      THEME_NAME: null,
    };
  },
  mounted() {
    this.$store.dispatch('loadPageSettings').then(function (){
      document.documentElement.style.setProperty('--primary-color', this.$store.state.settings.primary_color);
      document.documentElement.style.setProperty('--secondary-color', this.$store.state.settings.secondary_color);
      document.documentElement.style.setProperty('--swiper-theme-color', this.$store.state.settings.secondary_color);
    }.bind(this));
  },
};
</script>
