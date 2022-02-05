<template>
  <div class="portfolio-item p-2 sm:p-5 basis-full sm:basis-1/2 lg:basis-1/3">
    <div class="item p-5">
      <img :src="url" alt="" class="mb-5" />
      <h3 class="project-title font-black text-xl sm:text-2xl">
        {{ title }}
      </h3>
      <hr class="my-1" />
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    url: "",
    title: "",
    description: "",
  },
};
</script>

<style scoped>
.item {
  border: 3px solid #5c95ff;
}
</style>