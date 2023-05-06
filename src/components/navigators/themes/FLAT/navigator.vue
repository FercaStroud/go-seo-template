<template lang="pug">
.navbar.w-100(
  :style="{padding: paddingNavbar}"
)
  header.d-flex.flex-wrap.justify-content-center.w-100.container-fluid
    router-link.d-flex.align-items-center.mb-3.mb-md-0.me-md-auto.text-white.text-decoration-none(to='/')
      img.nav-image(
        v-if="$store.state.settings.logo"
        :src='PUBLIC_ASSETS + "images/logos/" + $store.state.settings.logo'
        alt='LOGO'
        :style="{padding: paddingLogo}"
      )

    ul.nav.nav-pills
      li.nav-item
        router-link.link.nav-link.primary-underline-h(to='/' @mouseover="showCategoriesNav=false")  Inicio
      //li.nav-item
        router-link.link.nav-link.primary-underline-h(
          to='/store'
          @mouseover="showCategoriesNav=true"
          @click="showCategoriesNav=false"
        )  {{ $store.state.settings.store_navigator_title }}
      li.nav-item
        router-link.link.nav-link.primary-underline-h(to='/portfolio' @mouseover="showCategoriesNav=false")  {{ $store.state.settings.portfolio_navigator_title }}
      li.nav-item
        router-link.link.nav-link.primary-underline-h(to='/blog' @mouseover="showCategoriesNav=false")  {{ $store.state.settings.blog_navigator_title }}
      li.nav-item
        router-link.link.nav-link.primary-underline-h(to='/services' @mouseover="showCategoriesNav=false")  {{ $store.state.settings.services_navigator_title }}
      li.nav-item
        router-link.link.nav-link.primary-underline-h(to='/contact' @mouseover="showCategoriesNav=false")  {{ $store.state.settings.contact_navigator_title }}

  .container-fluid.p-3.nav-categories(
    v-show="showCategoriesNav"
    @mouseleave="showCategoriesNav=false"
  )
    .row.pb-3(style="width:100%")
      .col-md-10.col-sm-12.text-center
        form.w-100.me-3(role='search')
          input.form-control(type='search' placeholder='Search...' aria-label='Search')
      .col-md-2.col-sm-12.text-center
        button.btn.primary-button.search(style="width:100%") Buscar
    .row()
      .col.text-center(v-for="(category, key) in $store.state.categories" :key="key")
        router-link.link.nav-link.primary-underline-h(:to="'/categories/' + category.id")
          img.img-fluid(:src='PUBLIC_ASSETS + "images/categories/" + category.src')
          span {{ category.name }}
</template>

<script>

export default {
  name: "navigator",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      paddingNavbar: '1rem',
      paddingLogo: '0',
      showCategoriesNav: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.$store.dispatch("loadCategories");
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.paddingNavbar = '0';
        this.paddingLogo = '10px';
      } else {
        this.paddingNavbar = '1rem';
        this.paddingLogo = '0';
      }
    }
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 999999;
  background-color: rgba(255,255,255,1);
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
  0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
  0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
  transition: 0.4s;
}

.img-container a {
  max-width: 200px;
  max-height: 50px;
}

.img-container a img {
  width: auto;
  height: 100%;
  transition: 0.4s;
}

.link {
  color: #555;
  transition: color 0.35s ease;
}

.link:hover {
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
