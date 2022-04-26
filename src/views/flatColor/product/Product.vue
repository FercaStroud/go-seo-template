<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content container mx-auto flex flex-wrap items-start p-5">
      <div class="basis-full md:basis-2/3 flex flex-wrap sm:px-5 mb-5 md:mb-0">
        <div class="basis-1/4 px-2 md:px-5 flex flex-col items-center gap-2">
          <div
            class="img-container flex justify-center items-center"
            v-for="(image, i) in product.images"
            :key="i"
          >
            <img :src="image" alt="" class="w-full h-auto" />
          </div>
        </div>

        <div class="img-container basis-3/4 px-5">
          <img :src="product.images[0]" alt="" class="w-full h-auto" />
        </div>
      </div>

      <div class="description basis-full md:basis-1/3 p-5">
        <h1 class="title-primary font-black text-xl sm:text-2xl mb-5">
          {{ product.title }}
        </h1>

        <p>{{ product.description }}</p>

        <hr class="my-2" />

        <div class="flex items-center mb-5">
          <div class="flex flex-col justify-center">
            <p :class="product.discount ? 'crossed' : 'normal-price'">
              ${{ product.price }}
            </p>

            <p class="font-black" v-if="product.discount">
              ${{ product.price - product.price * product.discount }}
            </p>
          </div>
          <p class="ml-2 font-black discount" v-if="product.discount">
            -{{ product.discount * 100 }}%
          </p>
        </div>

        <button class="primary-button">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" class="mr-2" />
          add to cart
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "product",
  data() {
    return {
      product: {
        images: [
          "https://via.placeholder.com/500x500/cccccc/222222",
          "https://via.placeholder.com/500x500/cccccc/222222",
          "https://via.placeholder.com/500x500/cccccc/222222",
        ],
        title: "Example product",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, deleniti commodi? Vitae velit debitis dolor unde nam eos quia non.",
        price: "150.00",
        discount: "0.2",
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.content {
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 6rem;
    min-height: calc(100vh - 6rem);
  }
}

.normal-price {
  font-weight: 900;
}
.crossed {
  color: #777;
  text-decoration: line-through;
}
.discount {
  color: #ff70a6;
}
.description {
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.028),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    2.2px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    4.2px 4.2px 33.4px rgba(0, 0, 0, 0.05), 10px 10px 80px rgba(0, 0, 0, 0.07);
}
</style>