<template>
  <div class="navbar font-mono flex flex-col sm:flex-row px-5 py-2 sm:px-10">
    <div class="logo basis-full mb-2 sm:mb-0 sm:basis-1/4">
      <div class="img-container">
        <a href="/">
          <img src="https://via.placeholder.com/150x50/5c95ff/222222/" alt="" />
        </a>
      </div>
    </div>

    <div class="links flex text-sm sm:text-base items-center sm:justify-end basis-full sm:basis-3/4">
      <a href="/template-1" class="link px-2">home</a>
      <a href="/portfolio-sober" class="link px-2">portfolio</a>
      <a href="/blog-sober" class="link px-2">blog</a>
      <a href="/contact-sober" class="link px-2">contact</a>
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
  background-color: #1e1e1e;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
}

.img-container {
  background-color: #5c95ff;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container > img {
  width: 100%;
  height: auto;
}
.link {
  transition: all 0.35s ease;
}
.link:hover {
  background-color: #5c95ff;
}
</style>