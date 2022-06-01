<template lang="pug">
.navbar
  .container.mx-auto.flex.flex-col.px-5.py-2(class='sm:flex-row sm:px-10')
    .logo.basis-full.mb-2(class='sm:mb-0 sm:basis-1/4')
      .img-container
        router-link(to='/')
          img(
            v-if="$store.state.settings.logo !== undefined"
            :src='PUBLIC_ASSETS + "images/logos/" + $store.state.settings.logo'
            alt='LOGO'
          )
          img(v-else src='https://via.placeholder.com/150x50/cccccc/000000' alt='LOGO')
    .links.flex.flex-wrap.text-sm.justify-between.items-center.basis-full(class='sm:text-base sm:justify-end sm:basis-3/4')
      router-link.link.px-2(to='/')  Inicio
      router-link.link.px-2(to='/portfolio')  Portafolio
      router-link.link.px-2(to='/blog')  Blog
      router-link.link.px-2(to='/services')  Servicios
      router-link.link.px-2(to='/products')  Productos
      router-link.link.px-2(to='/contact')  Contacto
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS
    }
  },
  mounted() {

  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 4;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}

.img-container {
  max-width: 150px;
  max-height: 50px;
}
.img-container img {
  width: 100%;
  height: auto;
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
  background-color: #d30000;
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
