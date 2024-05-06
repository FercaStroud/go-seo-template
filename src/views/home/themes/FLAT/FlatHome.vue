<template lang="pug">
.content(style="background: url('/enmDRAGON_PRSIACASO.png'); background-size:cover; background-position: right; background-position-x:800px; background-repeat:no-repeat")
  Banner
  Offers
  About
  Services
  Contact
</template>

<script>
import Offers from "../../../../components/offers/Offers.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Blog from "./components/Blog.vue";
import ClientsProviders from "../../../../components/clientsProviders/ClientsProviders.vue";
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
  //margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    Margin-top: 10.5rem;
  }
}

</style>
