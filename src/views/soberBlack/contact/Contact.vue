<template>
  <div class="view-container flex flex-col">
    <Navbar />
    <div
      class="
        form-container
        font-mono
        flex flex-col
        items-center
        justify-center
        py-20
        px-5
        max-w-screen-2xl
        2xl:mx-auto
        basis-full
      "
    >
      <div class="title flex">
        <h1 class="font-black mb-10 text-2xl sm:text-3xl md:text-5xl">
          Contacta con nosotros
        </h1>
      </div>

      <form @submit.prevent="onSubmit" class="flex flex-col sm:items-center">
        <div class="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label
            for="name"
            class="
              custom-label
              basis-full
              sm:basis-1/4 sm:w-20 sm:mr-5
              mb-2
              sm:mb-0
              font-normal
              text-xl
            "
          >
            Name<span class="required">*</span>:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            v-model="name"
            required
            class="
              custom-input
              basis-full
              sm:basis-3/4
              rounded
              border-none
              font-normal
              text-xl
            "
          />
        </div>

        <div class="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label
            for="email"
            class="
              custom-label
              basis-full
              sm:basis-1/4 sm:w-20 sm:mr-5
              mb-2
              sm:mb-0
              font-normal
              text-xl
            "
          >
            Email<span class="required">*</span>:
          </label>
          <input
            type="mail"
            id="email"
            name="email"
            placeholder="Your email"
            v-model="email"
            required
            class="
              custom-input
              basis-full
              sm:basis-3/4
              rounded
              border-none
              font-normal
              text-xl
            "
          />
        </div>

        <div class="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label
            for="budget"
            class="
              custom-label
              basis-full
              sm:basis-1/4 sm:w-20 sm:mr-5
              mb-2
              sm:mb-0
              font-normal
              text-xl
            "
          >
            budget<span class="required">*</span>:
          </label>
          <select
            id="budget"
            name="budget"
            v-model="selectedBudget"
            required
            class="
              custom-input custom-select
              basis-full
              sm:basis-3/4
              rounded
              border-none
              font-normal
              text-xl
            "
          >
            <option disabled value="">Plese select one</option>
            <option>$10,000 - $15,000</option>
            <option>$15,000 - $20,000</option>
            <option>$20,000+</option>
          </select>
        </div>

        <button type="submit" class="submit basis-full sm:self-stretch text-xl rounded">
          send
        </button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "SoberContact",
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
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.view-container {
  height: 100vh;
}
.title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  background-color: #5c95ff;
  height: 5px;
  width: 100%;
  bottom: 2rem;
}
.required {
  color: #f87575;
}
.custom-label {
  width: 3rem;
}
.custom-input {
  background-color: #333;
  height: 2.5rem;
  padding: 1rem;
}
@media screen and (min-width: 640px) {
  .custom-input {
    width: 20rem;
  }
}
.custom-select {
  padding: 0.5rem;
  height: 3rem;
}
.submit {
  background-color: #f87575;
  padding: 0.2rem 1rem;
  opacity: 0.8;
  transition: all 0.35s ease;
}
.submit:hover {
  opacity: 1;
}
</style>
