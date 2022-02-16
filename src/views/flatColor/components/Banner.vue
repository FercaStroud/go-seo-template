<template>
  <div class="banner my-5">
    <div class="background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#70d6ff"
          fill-opacity="1"
          d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,176C672,171,768,149,864,133.3C960,117,1056,107,1152,138.7C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>

    <div class="container mx-auto flex flex-col sm:flex-row">
      <div class="img-container basis-1/2 flex justify-center items-center p-0 sm:pl-5">
        <img
          src="https://images.unsplash.com/photo-1644866686516-0da93fe45a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          class="img"
        />
      </div>
      <div class="text basis-1/2 p-5 sm:p-10 flex flex-col justify-center">
        <h1 class="font-black text-3xl sm:text-4xl mb-5">
          Lorem ipsum <br />
          dolor sit amet <br />
          consectetur adipisicing elit.
        </h1>

        <span class="mb-5">Lorem ipsum dolor sit amet.</span>

        <form @submit.prevent="onSubmit" class="form flex">
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
  position: relative;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.img {
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}
.form {
  border-radius: 0.25rem 1rem 0.25rem 1rem;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}
.custom-input {
  border-radius: 0.25rem 0 0 1rem;
}
.submit {
  background-color: #0092cc;
  /* color: white; */
  padding: 0.2rem 1rem;
  border-radius: 0 1rem 0.25rem 0;
  transition: all 0.35s ease;
}
.submit:hover {
  background-color: #70d6ff;
}
</style>