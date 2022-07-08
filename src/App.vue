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
    this.$store.dispatch('loadPageSettings');/*.then(function (){
      this.THEME_NAME = this.$store.state.settings.theme_name;
      console.log(this.THEME_NAME)
    }.bind(this));*/
  },
};
</script>
