<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div
      class="
        content
        relative
        container
        mx-auto
        flex flex-col
        items-center
        mb-20
      "
    >
      <h1 class="title font-black text-3xl sm:text-4xl my-10">
        Contact with us!
      </h1>

      <div class="form-container flex flex-row flex-wrap justify-center items-center gap-10 sm:gap-0">
        <div class="map-container basis-1/2 flex justify-center items-center">
          <Map />
        </div>

        <form
          @submit.prevent="onSubmit"
          class="form basis-1/2 flex flex-col justify-center items-center sm:items-start gap-5"
        >
          <div class="form-field flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center">
            <label for="name" class="text-lg w-20">Name <span class="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              v-model="name"
              required
              class="form-input"
            />
          </div>

          <div class="form-field flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center">
            <label for="email" class="text-lg w-20">Email <span class="required">*</span></label>
            <input
              type="mail"
              id="email"
              name="email"
              placeholder="Your email"
              v-model="email"
              required
              class="form-input"
            />
          </div>

          <div class="form-field flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center">
            <label for="budget" class="text-lg w-20">budget <span class="required">*</span></label>
            <select name="budget" id="budget" v-model="selectedBudget" required class="form-input">
              <option value="" disable>Select one</option>
              <option>$10,000 - $15,000</option>
              <option>$15,000 - $20,000</option>
              <option>$20,000+</option>
            </select>
          </div>

          <button class="submit text-lg">send</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Map from "../components/Map.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "contact",
  components: {
    Navbar,
    Map,
    Footer,
  },
  data() {
    return {
      name: "",
      email: "",
      selectedBudget: "",
    };
  },
  methods: {
    onSubmit() {
      alert(
        `name: ${this.name}\nemail: ${this.email}\nselected: ${this.selectedBudget}`
      );
      this.name = "";
      this.email = "";
      this.selectedBudget = "";
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 4rem;
  min-height: 60vh;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5rem;
  }
}

.title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -10px;
  height: 5px;
  width: 100%;
  border-radius: 1rem;
  background-color: #ff70a6;
}

.form-container {
  width: 100%;
}
.required {
  color: #ff1f75;
}
.form-input {
  border: 1px solid #ccc;
  height: 3rem;
  width: 18rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
}
.submit {
  background-color: #ff70a6;
  color: white;
  padding: 0.2rem 2rem;
  border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.35s ease;
}
.submit:hover {
  background-color: #ff1f75;
}
</style>