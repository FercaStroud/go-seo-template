<template lang="pug">
.content
  Offers
  Banner
  About
  Services
  Blog
  ClientsProviders
  Contact
</template>

<script>
import Offers from "../../components/offers/Offers.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Blog from "./components/Blog.vue";
import ClientsProviders from "../../components/clientsProviders/ClientsProviders.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "Home",
  mounted() {
    console.log(
    )
  },
  components: {
    Offers,
    Banner,
    About,
    Services,
    Blog,
    ClientsProviders,
    Contact,
  },
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 4.5rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 7.5rem;
  }
}

</style>
