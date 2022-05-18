<template lang="pug">
.content
  Offers
  Banner
  About
  Services
</template>

<script>
import Offers from "../../components/Offers.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
export default {
  name: "Home",
  mounted() {
    console.log(
    )
  },
  components: {
    Services,
    About,
    Banner,
    Offers
  },
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5rem;
  }
}

</style>
