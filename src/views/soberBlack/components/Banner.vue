<template>
  <div class="banner-container">
    <div class="banner-img"></div>
    <div class="content flex flex-col px-5 pt-20 sm:p-10 lg:p-20">
      <div class="banner-text sm:w-1/3 xl:w-1/4">
        <h1 class="font-black text-2xl sm:text-3xl mb-5">Lorem ipsum dolor sit amet.</h1>
        <p class="sm:text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          ullam.
        </p>
      </div>
      <form @submit.prevent="onSubmit" class="flex w-1/3">
        <input
          type="text"
          v-model="foo"
          name="foo"
          placeholder="lorem"
          class="custom-input border-none basis-4/5"
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
.banner-container {
  position: relative;
  margin-top: 4rem;
  height: 400px;
  color: white;
}
@media screen and (max-width: 639px) {
  .banner-container {
    margin-top: 5rem;
  }
}

.banner-img {
  background-image: url(https://images.unsplash.com/photo-1643575102128-0d6b42fbdda1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
  content: "";
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.content {
  position: absolute;
  top: 0;
  background-color: #2225;
  width: 100%;
  height: 100%;
}
.banner-text {
}

.custom-input {
  background-color: #333;
  color: white;
  border-radius: 0.25rem 0 0 0.25rem;
}
.submit {
  background-color: #c54c4c;
  color: white;
  padding: 0.2rem 1rem;
  border-radius: 0 0.25rem 0.25rem 0;
  transition: all 0.35s ease;
}
.submit:hover {
  background-color: #f87575;
}
</style>