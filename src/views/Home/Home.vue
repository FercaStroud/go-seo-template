<template lang="pug">
.content
  Offers
  Banner
</template>

<script>

import Offers from "../../components/Offers.vue";
import Banner from "./components/Banner.vue";
export default {
  name: "Home",
  mounted() {
    console.log(
    )
  },
  components: {
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
