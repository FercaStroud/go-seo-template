<template>
  <div
    class="
      description-container
      container
      mx-auto
      flex flex-row flex-wrap
      p-5
      sm:px-0
      sm:py-10
    "
  >
    <div class="text basis-full sm:basis-1/2 flex flex-col justify-center mb-10 sm:mb-0 sm:pr-10">
      <div class="title-box flex">
        <h2 class="title-primary font-black text-xl sm:text-2xl mb-2">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, labore
        sequi sit velit nihil, dolore vitae tempora dolorem aliquid ea illo
        iusto nesciunt voluptatibus ut quaerat tenetur aut temporibus maxime
        eius, saepe accusamus beatae magnam. Molestiae nesciunt quos facere
        aliquam ratione deleniti tenetur eaque, sequi labore laborum mollitia
        inventore pariatur.
      </p>
    </div>

    <div
      class="
        img-container
        basis-full
        sm:basis-1/2
        flex
        justify-center
        sm:justify-end
      "
    >
      <img
        src="https://images.unsplash.com/photo-1644955876498-bcb2dddb8645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style scoped>
/* .title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -5px;
  height: 5px;
  width: 100%;
  border-radius: 1rem;
  background-color: #ff70a6;
} */
</style>