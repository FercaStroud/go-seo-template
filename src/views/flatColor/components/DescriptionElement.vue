<template>
  <div
    :id="ID"
    class="flex flex-col flex-wrap p-5 mb-10 md:mb-20"
    :class="textSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'"
  >
    <div class="img-container basis-full md:basis-1/2 flex items-center">
      <img
        :src="img ? img : 'https://via.placeholder.com/1500x1000/cccccc/222222'"
        alt=""
      />
    </div>

    <div
      class="
        text
        basis-full
        md:basis-1/2
        flex flex-col
        justify-center
        pt-5
        md:px-10
        text-center
        sm:text-left
      "
    >
      <h2 class="title-primary font-black text-xl md:text-2xl mb-5">
        {{ title }}
      </h2>
      <p class="mb-2" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Element",
  props: {
    ID: "",
    textSide: "",
    title: "",
    description: "",
    img: "",
  },
};
</script>

<style scoped>
.title {
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
  background-color: #d30000;
}
</style>