<template>
  <div
    class="
      banner
      font-mono
      flex
      items-center
      py-20
      max-w-screen-2xl
      2xl:mx-auto
    "
  >
    <div class="px-2 sm:pl-20 sm:w-2/3 lg:w-1/3">
      <h1 class="font-black text-lg mb-5 sm:text-2xl lg:text-3xl">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p class="text-base sm:text-lg mb-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <form @submit.prevent="onSubmit" class="flex">
        <input
          type="text"
          v-model="foo"
          name="foo"
          placeholder="lorem"
          class="form-input border-none basis-4/5"
        />
        <button type="submit" class="submit basis-1/5">send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      foo: "",
    };
  },
  methods: {
    onSubmit() {
      alert(this.foo);
      this.foo = "";
    },
  },
};
</script>

<style scoped>
.banner {
  background-image: url(https://via.placeholder.com/1000x700/555555);
  background-position: center;
  background-size: cover;
  color: #222;
}
.submit {
  background-color: #f87575;
  padding: 0.2rem 1rem;
}
</style>