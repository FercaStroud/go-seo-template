<template>
  <div
    class="
      home-container
      flex
      gap-10
      justify-center
      items-center
      flex-col
      sm:flex-row
    "
  >
    <router-link
      class="custom-link font-black text-center text-2xl sm:text-3xl"
      to="/template-1"
    >
      template 1
    </router-link>

    <router-link
      class="custom-link font-black text-center text-2xl sm:text-3xl"
      to="/template-2"
    >
      template 2
    </router-link>

    <router-link
      class="custom-link font-black text-center text-2xl sm:text-3xl"
      to="/template-1"
    >
      template 1
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background-color: #222;
  color: white;
}
.custom-link {
  position: relative;
}
.custom-link::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -5px;
  height: 3px;
  width: 0;
  background-color: #00acc1;
  transition: width 0.35s ease;
}
.custom-link:hover::after {
  width: 100%;
}
</style>