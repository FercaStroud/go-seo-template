<template>
  <div class="content font-mono py-10 max-w-screen-2xl 2xl:mx-auto">
    <div class="features flex flex-row flex-wrap px-5 pb-10">
      <div class="basis-full sm:basis-1/3 p-2 sm:p-5 flex-col text-center">
        <div class="feature p-5">
          <p class="text-5xl mb-5">
            <font-awesome-icon :icon="['fas', 'laptop-code']" />
          </p>
          <p class="font-black text-2xl mb-2">Lorem, ipsum dolor.</p>
          <p class="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            earum.
          </p>
        </div>
      </div>

      <div class="basis-full sm:basis-1/3 p-2 sm:p-5 flex-col text-center">
        <div class="feature p-5">
          <p class="text-5xl mb-5">
            <font-awesome-icon :icon="['fas', 'rocket']" />
          </p>
          <p class="font-black text-2xl mb-2">Lorem, ipsum dolor.</p>
          <p class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            nostrum?
          </p>
        </div>
      </div>

      <div class="basis-full sm:basis-1/3 p-2 sm:p-5 flex-col text-center">
        <div class="feature p-5">
          <p class="text-5xl mb-5">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
          </p>
          <p class="font-black text-2xl mb-2">Lorem, ipsum dolor.</p>
          <p class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            distinctio.
          </p>
        </div>
      </div>
    </div>

    <div class="recomendation flex flex-col items-center py-10">
      <p class="star text-base mb-2">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
      </p>
      <p class="font-black text-xl mb-2">Lorem, ipsum dolor.</p>
      <div class="flex flex-row justify-center">
        <p class="text-base text-center px-2 sm:basis-1/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          amet, sequi repellat qui expedita animi accusamus earum quidem iste
          assumenda optio a ab sint cumque nisi quo quibusdam ex voluptatem.
        </p>
      </div>
      <p>— Lorem, ipsum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
.feature {
  height: 100%;
  background-color: rgba(92, 149, 255, 0.1);
  transition: all 0.35s ease;
}
.feature:hover {
  background-color: rgba(92, 149, 255, 0.8);
}
.recomendation {
  background-color: #333;
}
.star {
  color: #f87575;
}
</style>