<template>
  <div class="navbar flex flex-col sm:flex-row px-5 py-2 sm:px-10">
    <div class="logo basis-full mb-2 sm:mb-0 sm:basis-1/4">
      <div class="img-container">
        <router-link to="/">
          <img src="https://via.placeholder.com/150x50/FF70A6/000000" alt="" />
        </router-link>
      </div>
    </div>

    <div
      class="
        links
        flex
        text-sm
        sm:text-base
        items-center
        sm:justify-end
        basis-full
        sm:basis-3/4
      "
    >
      <router-link to="/template-2" class="link px-2"> home </router-link>
      <router-link to="/portfolio-flat" class="link px-2"> portfolio </router-link>
      <router-link to="/products-flat" class="link px-2"> products </router-link>
      <router-link to="/contact-flat" class="link px-2"> contact </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}
.link {
  position: relative;
  color: #555;
  transition: color 0.35s ease;
}
.link:hover {
  color: black;
}
.link::after {
  position: absolute;
  content: "";
  background-color: #ff70a6;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 0;
  border-radius: 1rem;
  transition: width 0.35s ease;
}
.link:hover::after {
  width: 100%;
}
</style>