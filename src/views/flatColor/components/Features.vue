<template>
  <div class="features-container container mx-auto">
    <div
      class="
        about
        text-center
        flex flex-col
        justify-center
        items-center
        gap-5
        p-10
        sm:px-20
      "
    >
      <h2 class="title-primary font-black text-xl sm:text-2xl">
        Lorem ipsum dolor sit amet.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est
        soluta porro ad quasi laborum consectetur eveniet quia placeat saepe vel
        assumenda quae fugiat cumque qui magnam deleniti magni dolor, ipsum illo
        ut numquam! A in repudiandae cumque minus natus, reprehenderit eum,
        impedit nihil blanditiis unde debitis eos eaque officiis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        dolorum saepe odit sit earum dolor numquam! Molestias optio fugiat error
        quaerat reiciendis natus quidem necessitatibus nobis facilis voluptate.
        Sint laborum facilis fugiat quo, asperiores optio adipisci laudantium,
        commodi dolorum consequuntur voluptas at blanditiis? Ipsum
        necessitatibus cupiditate ab ducimus rerum adipisci!
      </p>
    </div>

    <div class="features flex flex-row flex-wrap justify-center my-10">
      <div
        class="feature basis-1/2 sm:basis-1/3 p-5 md:p-10 flex-col text-center"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl mb-5">
          <font-awesome-icon :icon="['fas', 'laptop-code']" />
        </p>
        <p class="font-black sm:text-lg md:text-xl lg:text-2xl mb-2">
          Lorem, ipsum dolor.
        </p>
        <p class="lg:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          earum.
        </p>
      </div>

      <div
        class="feature basis-1/2 sm:basis-1/3 p-5 md:p-10 flex-col text-center"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl mb-5">
          <font-awesome-icon :icon="['fas', 'rocket']" />
        </p>
        <p class="font-black sm:text-lg md:text-xl lg:text-2xl mb-2">
          Lorem, ipsum dolor.
        </p>
        <p class="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          nostrum?
        </p>
      </div>

      <div
        class="feature basis-1/2 sm:basis-1/3 p-5 md:p-10 flex-col text-center"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl mb-5">
          <font-awesome-icon :icon="['fas', 'clock']" />
        </p>
        <p class="font-black sm:text-lg md:text-xl lg:text-2xl mb-2">
          Lorem, ipsum dolor.
        </p>
        <p class="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          distinctio.
        </p>
      </div>

      <div
        class="feature basis-1/2 sm:basis-1/3 p-5 md:p-10 flex-col text-center"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl mb-5">
          <font-awesome-icon :icon="['fas', 'truck']" />
        </p>
        <p class="font-black sm:text-lg md:text-xl lg:text-2xl mb-2">
          Lorem, ipsum dolor.
        </p>
        <p class="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          fugit!
        </p>
      </div>

      <div
        class="feature basis-1/2 sm:basis-1/3 p-5 md:p-10 flex-col text-center"
      >
        <p class="text-xl sm:text-2xl lg:text-4xl mb-5">
          <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        </p>
        <p class="font-black sm:text-lg md:text-xl lg:text-2xl mb-2">
          Lorem, ipsum dolor.
        </p>
        <p class="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minima.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
.about {
  background-color: #eee;
}
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