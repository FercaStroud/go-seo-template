<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content container mx-auto p-5">
      <h1 class="title-primary font-black text-center text-xl sm:text-2xl mb-5">
        My cart
      </h1>

      <div class="flex flex-wrap items-start">
        <div class="basis-full md:basis-3/4">
          <div
            class="sm:px-5 text-sm"
            v-for="(product) in products"
            :key="product.id"
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
                  <p class="mb-2">Each</p>
                  <p class="font-black">${{ product.price }}</p>
                </div>

                <div class="flex flex-col">
                  <p class="mb-2">quantity</p>
                  <div class="flex justify-between items-center">
                    <button
                      @click="subQuantity(product.id)"
                      class="cart-button w-6 h-6"
                      :disabled="product.quantity === 1"
                    >
                      <font-awesome-icon :icon="['fas', 'minus']" />
                    </button>
                    <p class="px-2">{{ product.quantity }}</p>
                    <button @click="addQuantity(product.id)" class="cart-button w-6 h-6">
                      <font-awesome-icon :icon="['fas', 'plus']" />
                    </button>
                  </div>
                </div>

                <div class="flex flex-col">
                  <p class="mb-2">Discount</p>
                  <p class="font-black">-{{ product.discount * 100 }}%</p>
                </div>

                <div class="flex flex-col">
                  <p class="mb-2">total</p>
                  <p class="font-black">
                    ${{
                      product.price * product.quantity -
                      product.price * product.quantity * product.discount
                    }}
                  </p>
                </div>

                <div class="flex flex-col">
                  <p class="mb-2">remove</p>
                  <button
                    @click="removeProduct(product.id)"
                    class="cart-button trash w-6 h-6 self-center"
                  >
                    <font-awesome-icon :icon="['fas', 'trash']" />
                  </button>
                </div>
              </div>
            </div>
            <hr class="my-5" />
          </div>
        </div>

        <div class="total basis-full md:basis-1/4 p-5">
          <div class="flex justify-between mb-2">
            <p>Shipping cost</p>
            <p>TBD</p>
          </div>
          <div class="flex justify-between mb-2">
            <p>Total</p>
            <p class="font-black">${{ totalNoDiscount }}</p>
          </div>
          <div class="flex justify-between mb-2">
            <p>Discount</p>
            <p class="font-black discount">-${{ totalDiscount }}</p>
          </div>
          <hr class="mb-2" />
          <div class="flex justify-between font-black text-md mb-2">
            <p>Estimated Total</p>
            <p class="font-black">${{ totalPrice }}</p>
          </div>
          <button @click="checkout" class="primary-button">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="mr-2" />
            Checkout
          </button>
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
      totalNoDiscount: 0,
      totalDiscount: 0,
      totalPrice: 0,
      products: [
        {
          id: 0,
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, deleniti commodi? Vitae velit debitis dolor unde nam eos quia non.",
          price: 100,
          quantity: 2,
          discount: 0.2,
        },
        {
          id: 1,
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nemo modi aliquid unde, ipsa excepturi commodi id. Quidem, eum optio?",
          price: 120,
          quantity: 1,
          discount: 0.3,
        },
        {
          id: 2,
          images: ["https://via.placeholder.com/500x500/cccccc/222222"],
          title: "Example product 3",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sequi suscipit excepturi voluptate ipsum libero illo eos at vel atque.",
          price: 150,
          quantity: 1,
          discount: 0,
        },
      ],
    };
  },
  mounted() {
    this.products.map(
      (product) =>
        (product.quantity = product.quantity < 1 ? 1 : product.quantity)
    );
    this.calculateTotals();
  },
  methods: {
    calculateTotals() {
      const noDiscount = this.products
        .map((product) => product.price * product.quantity)
        .reduce((prev, curr) => prev + curr);
      this.totalNoDiscount = noDiscount;

      const price = this.products
        .map(
          (product) =>
            product.price * product.quantity -
            product.price * product.quantity * product.discount
        )
        .reduce((prev, curr) => prev + curr);
      this.totalPrice = price;

      const discount = this.products
        .map((product) => product.price * product.quantity)
        .reduce((prev, curr) => prev + curr);
      this.totalDiscount = (price - discount) * -1;
    },
    addQuantity(id) {
      this.products[id].quantity++;
      this.calculateTotals();
    },
    subQuantity(id) {
      this.products[id].quantity--;
      this.calculateTotals();
    },
    removeProduct(id) {
      if (this.products.length !== 1) {
        const newProducts = this.products.filter((product, i) => i !== id);
        this.products = newProducts;
        this.calculateTotals();
        return;
      }
      this.products = [];
      this.totalNoDiscount = 0;
      this.totalDiscount = 0;
      this.totalPrice = 0;
    },
    checkout() {
      console.log(`total: ${this.totalPrice}`);
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
.discount {
  color: #ff70a6;
}
.cart-button {
  background-color: #eee;
  transition: background-color 0.35s ease;
}
.cart-button:hover {
  background-color: #ccc;
}
.cart-button:disabled {
  color: #aaa;
}
.trash,
.trash:hover {
  border: none;
  color: #ff70a6;
  background-color: transparent;
}
.total {
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.028),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    2.2px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    4.2px 4.2px 33.4px rgba(0, 0, 0, 0.05), 10px 10px 80px rgba(0, 0, 0, 0.07);
}
</style>