<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content container mx-auto p-5">
      <h1 class="title-primary font-black text-center text-xl sm:text-2xl mb-5">
        My cart
      </h1>

      <div class="flex flex-wrap">
        <div class="basis-full md:basis-3/4">
          <div
            class="sm:px-5 text-sm"
            v-for="(product, i) in products"
            :key="i"
          >
            <div class="flex flex-wrap">
              <div class="basis-full md:basis-1/2 flex">
                <div class="img-container flex justify-center items-center p-2">
                  <img :src="product.images[0]" alt="" class="w-full h-auto" />
                </div>

                <div class="flex flex-col p-2">
                  <h2 class="font-black text-md">{{ product.title }}</h2>
                  <p>{{ product.description }}</p>
                </div>
              </div>

              <div
                class="
                  basis-full
                  md:basis-1/2
                  flex
                  justify-between
                  text-center
                  p-2
                "
              >
                <div class="flex flex-col">
                  <p>Each</p>
                  <p class="font-black">${{ product.price }}</p>
                </div>

                <div class="flex flex-col">
                  <p>quantity</p>
                  <div class="flex justify-between items-center">
                    <button class="border w-5 h-5 font-black">-</button>
                    <p class="px-2">{{ product.quantity }}</p>
                    <button class="border w-5 h-5 font-black">+</button>
                  </div>
                </div>

                <div class="flex flex-col">
                  <p>Discount</p>
                  <p class="font-black">-{{ product.discount * 100 }}%</p>
                </div>

                <div class="flex flex-col">
                  <p>total</p>
                  <p class="font-black">
                    ${{
                      product.price * product.quantity -
                      product.price * product.quantity * product.discount
                    }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="my-5" />
          </div>
        </div>

        <div class="basis-full md:basis-1/4 sm:px-5">
          <div class="flex justify-between mb-2">
            <p>Shipping cost</p>
            <p>TBD</p>
          </div>
          <div class="flex justify-between mb-2">
            <p>Discount</p>
            <p>-${{ totalDiscount }}</p>
          </div>
          <hr class="mb-2" />
          <div class="flex justify-between font-black text-md mb-2">
            <p>Estimated Total</p>
            <p>-${{ totalPrice }}</p>
          </div>
          <button @click="test" class="primary-button">Checkout</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "shoppingCart",
  data() {
    return {
      totalDiscount: 0,
      totalPrice: 0,
      products: [
        {
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, deleniti commodi? Vitae velit debitis dolor unde nam eos quia non.",
          price: "100.00",
          quantity: "2",
          discount: "0.2",
        },
        {
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nemo modi aliquid unde, ipsa excepturi commodi id. Quidem, eum optio?",
          price: "120.00",
          quantity: "1",
          discount: "0.3",
        },
        {
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 3",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sequi suscipit excepturi voluptate ipsum libero illo eos at vel atque.",
          price: "150.00",
          quantity: "1",
          discount: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    test() {
      this.products.map((product) => {
        console.log(
          `price: ${product.price} - discount ${product.discount * 1}`
        );
      });
    },
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
</style>