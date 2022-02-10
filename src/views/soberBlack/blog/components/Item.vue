<template>
  <div class="blog-item p-2 sm:p-5 basis-full sm:basis-1/2">
    <div class="item flex flex-col lg:flex-row gap-5 p-5">
      <img :src="img" alt="" />
      <div class="content">
        <span class="category">{{ category }}</span>
        <h2 class="title font-black text-lg sm:text-xl lg:text-2xl">
          {{ title }}
        </h2>
        <span class="date text-sm">{{ date }}</span>
        <p class="description">
          {{ description }}
        </p>
        <router-link :to="url" class="link">continue reading</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    img: "",
    category: "",
    title: "",
    date: "",
    description: "",
    url: "",
  },
};
</script>

<style scoped>
.item {
  border: 3px solid #5c95ff;
}
.category {
  color: #f87575;
}
.date {
  color: #ababab;
}
.link {
  color: #336cd6;
  position: relative;
  transition: all 0.35s ease;
}
.link:hover {
  color: #5c95ff;
}
.link::after {
  position: absolute;
  content: "";
  height: 3px;
  width: 0;
  left: 0;
  bottom: -5px;
  background-color: #5c95ff;
  transition: all 0.35s ease;
}
.link:hover::after {
  width: 100%;
}
</style>