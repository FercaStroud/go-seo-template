<template lang="pug">
.navbar
  .container.mx-auto.flex.p-2(:class="viewport === 'sm' ? 'flex-col' : 'flex-row'")
    .logo-n-burger.basis-full.flex.justify-between.items-center
      .img-container
        router-link(to="/")
          img(
            v-if="$store.state.settings.logo",
            :src="PUBLIC_ASSETS + 'images/logos/' + $store.state.settings.logo",
            alt="LOGO"
          )
      button.burger.aspect-square.p-2(
        v-if="viewport === 'sm'",
        @click="toggleMenu",
        :class="viewMenu ? 'change' : ''"
      )
        .bar1
        .bar2
        .bar3

    .links.basis-full.flex.items-center(
      v-if="viewMenu || viewport !== 'sm'",
      :class="viewport === 'sm' ? 'flex-col justify-center' : 'flex-row justify-end'"
    )
      router-link.link.primary-underline-h.px-2(to="/") Inicio
      router-link.link.primary-underline-h.px-2(to="/portfolio") {{ $store.state.settings.portfolio_navigator_title }}
      router-link.link.primary-underline-h.px-2(to="/blog") {{ $store.state.settings.blog_navigator_title }}
      router-link.link.primary-underline-h.px-2(to="/services") {{ $store.state.settings.services_navigator_title }}
      //router-link.link.primary-underline-h.px-2(to="/products") {{ $store.state.settings.store_navigator_title }}
      router-link.link.primary-underline-h.px-2(to="/contact") {{ $store.state.settings.contact_navigator_title }}
      router-link.link.primary-underline-h.px-2(to="/catalogo-marcas") Catálogo de Marcas
      router-link.link.primary-underline-h.px-2(to="/catalogo-peeisa") Folleto Peeisa
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      viewMenu: false,
      windowWidth: window.innerWidth,
      viewport: "",
    };
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      console.log(`it changed to ${newWidth} from ${oldWidth}`);
      this.setViewport(newWidth);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.setViewport(this.windowWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    toggleMenu() {
      this.viewMenu = !this.viewMenu;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    setViewport(newWidth) {
      this.viewport = newWidth < 640 ? "sm" : "md";
    }
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  background-color: #fff;
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

.burger {
  border: 1px solid #333;
  position: fixed;
  border-radius: 4px;
  right: 20px;
  top: 17px;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 2px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-5px, 6px);
  transform: rotate(-45deg) translate(-5px, 6px);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-4px, -6px);
  transform: rotate(45deg) translate(-4px, -6px);
}
.primary-underline-h{
  text-decoration: none !important;
  color: black;
}
.nav-image{
  max-width:150px;
  width:150px
}
.nav-categories{
  transition: color 0.35s ease;
  border-bottom:3px solid var(--primary-color);
}
@media(max-width: 767px){
  .search{
    margin-top:10px;
  }
}

</style>
