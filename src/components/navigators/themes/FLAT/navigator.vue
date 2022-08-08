<template lang="pug">
.navbar
  .container.mx-auto.flex.flex-col.px-5.py-2(class='sm:flex-row sm:px-10')
    .logo.basis-full.mb-2(class='sm:mb-0 sm:basis-1/4')
      .img-container
        router-link(to='/')
          img(
            v-if="$store.state.settings.logo"
            :src='PUBLIC_ASSETS + "images/logos/" + $store.state.settings.logo'
            alt='LOGO'
          )
    .links.flex.flex-wrap.text-sm.justify-between.items-center.basis-full(class='sm:text-base sm:justify-end sm:basis-3/4')
      router-link.link.primary-underline-h.px-2(to='/')  Inicio
      router-link.link.primary-underline-h.px-2(to='/portfolio')  {{ $store.state.settings.portfolio_navigator_title }}
      router-link.link.primary-underline-h.px-2(to='/blog')  {{ $store.state.settings.blog_navigator_title }}
      //- router-link.link.primary-underline-h.px-2(to='/services')  {{ $store.state.settings.services_navigator_title }}
      //- router-link.link.primary-underline-h.px-2(to='/products')  {{ $store.state.settings.store_navigator_title }}
      router-link.link.primary-underline-h.px-2(to='/contact')  {{ $store.state.settings.contact_navigator_title }}

</template>

<script>

export default {
  name: "navigator",
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
  background-color: white;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
  0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
  0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}

.img-container a {
  max-width: 200px;
  max-height: 50px;
}
.img-container a img {
  width: auto;
  height: 100%;
}

.link {
  color: #555;
  transition: color 0.35s ease;
}
.link:hover {
  color: black;
}
</style>
