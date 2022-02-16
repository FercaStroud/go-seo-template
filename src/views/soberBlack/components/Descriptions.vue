<template>
  <div
    class="
      font-mono
      description-container
      container
      mx-auto
      flex flex-row flex-wrap
      p-5
      sm:px-0 sm:py-10
    "
  >
    <div class="img-container basis-full sm:basis-1/2 flex justify-center mb-10">
      <img
        src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        alt=""
      />
      <!-- <img
        src="https://via.placeholder.com/350x500/555555"
        alt=""
      /> -->
    </div>
    <div
      class="
        text
        basis-full
        sm:basis-1/2
        flex flex-col
        justify-center
        mb-10
        sm:px-5
      "
    >
      <div class="title-box flex">
        <h2 class="title font-black text-xl sm:text-2xl mb-2">
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
        text
        basis-full
        sm:basis-1/2
        flex flex-col
        justify-center
        mb-10
        sm:px-5
      "
    >
      <div class="title-box flex">
        <h2 class="title font-black text-xl sm:text-2xl mb-2">
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
    <div class="img-container basis-full sm:basis-1/2 flex justify-center mb-10">
      <img
        src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt=""
      />
      <!-- <img
        src="https://via.placeholder.com/350x500/555555"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Descriptions",
};
</script>

<style scoped>
.description-container {
  justify-content: space-between;
}
.description-container .img-container {
  max-width: 450px;
}
.description-container .img-container img {
  height: 100%;
  width: auto;
}
</style>