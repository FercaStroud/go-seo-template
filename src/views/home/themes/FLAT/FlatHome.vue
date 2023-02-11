<template lang="pug">
.content
  Banner
  Offers
  About
  //Services
  // Blog
  //ClientsProviders
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC2.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC3.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC4.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC5.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC6.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC7.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC8.webp" alt="")
  img(style="width:100%" src="https://inviertesolido.com/Brochure-TC9.webp" alt="")
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
