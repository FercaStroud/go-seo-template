<template lang="pug">
.container-fluid.my-5.pt-5.product-container(data-aos="fade-down")
  .row
    .col-sm-12.col-md-3
      .text-center Filtros
      ol.list-group.pt-2
        li.pointer.list-group-item.d-flex.justify-content-between.align-items-start(
          v-for="(category, key) in $store.state.products" :key="key"
        )
          .ms-2.me-auto
            .fw-normal {{ category.name }}
          span.badge.bg-primary.fw-normal {{(category.products).length}}

        li.pointer.list-group-item.d-flex.justify-content-between.align-items-start.active()
          .ms-2.me-auto
            .fw-normal Sin filtros
    .col-sm-12.col-md-9
      .row
        template(
          v-for="(category, key) in $store.state.products"
          :key="key"
        )
          .col-md-6.col-lg-4.pb-5(
            v-for="(product, index) in category.products" :key="index"
          )
            .product-card
              .row
                .col-sm-12.col-md-6.col-lg-12.product-image(style="background-image:url('https://picsum.photos/1000/1000')")
                .col-sm-12.col-md-6.col-lg-12
                  small {{ category.name.length >= 20 ? category.name.substring(0, 20) + '...' : category.name }}
                  br/
                  .fw-normal.product-title {{ product.name.length >= 15 ? product.name.substring(0, 15) + '...' : product.name }}
                  br/
                  span {{ product.description.length >= 30 ? product.description.substring(0, 30) + '...' : product.description }}
                  br/
                  .price $ {{product.price}}
                  small MXN
                  router-link.btn.mt-3.primary-underline-h.btn-sm(:to="'/product/' + product.id"  style="width:100%;") Más detalles
                  button.btn.primary-button.mt-3(style="width:100%;") Añadir al carrito

</template>

<script>
export default {
  name: "FlatStore",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadProducts").then(function (){
      AOS.init();
    })
  },
  methods: {
  },
  components: {},
};
</script>

<style scoped lang="scss">
small{
  font-size: .7rem;
}
.price{
  font-size: 2rem;
}
.product-title{
  font-size: 1.2rem;
}
.fw-normal{
  font-family: 'Public Sans', sans-serif !important;
}
.list-group {
}
.product-image{
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  height: 425px;
  border:10px solid white;
}
.product-card{
  //background-color: var(--secondary-color);
  //color: var(--primary-color);
}
.product-card:hover{

}

@media(max-width: 991px){
  .product-container{
    margin-top:150px !important;
  }
}

</style>
