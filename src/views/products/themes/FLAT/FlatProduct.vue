<template lang="pug">
.container.my-5.pt-5(data-aos="fade-down")
  .row.pt-3.shadow-lg.rounded
    .col-sm-12.col-md-6
      .row
        .col-md-12
          img.img-fluid.rounded(src="https://picsum.photos/1000/1000")


    .col-sm-12.col-md-6
      .category-text.font-2
        span.badge.bg-primary Categoría
      .product-title-text.font-1 Título del Producto
      .product-price-text.font-2.pt-3
        span.badge.bg-primary $ 99,999.00
      .product-description.pt-3
        strong Descripción
        p(style="text-align:justify") Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis dignissimos eaque exercitationem explicabo, illo iste mollitia non numquam officia quae quidem suscipit, tempore temporibus tenetur unde voluptates voluptatum. Nihil.


    .col-sm-12.col-md-6
      .row
        .col.mt-3.mb-3
          img.product-image-preview.img-fluid.rounded(src="https://picsum.photos/1000/1000")
        .col.mt-3.mb-3
          img.product-image-preview.img-fluid.rounded(src="https://picsum.photos/1000/1000")
        .col.mt-3.mb-3
          img.product-image-preview.img-fluid.rounded(src="https://picsum.photos/1000/1000")
        .col.mt-3.mb-3
          img.product-image-preview.img-fluid.rounded(src="https://picsum.photos/1000/1000")
        .col.mt-3.mb-3
          img.product-image-preview.img-fluid.rounded(src="https://picsum.photos/1000/1000")
    .col-sm-12.col-md-6
      .row
        .col
          button.btn.primary-button.p-3(style="width:100%;margin-top:34px") Añadir al carrito


</template>

<script>
export default {
  name: "FlatProduct",
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
.category-text{
  color: var(--secondary-color) !important;
  //background-color: var(--primary-color) !important;
  font-size: 1em;
}
.product-title-text{
  font-size: 2rem;
  color: var(--primary-color) !important;
}
.product-price-text{
  color: var(--secondary-color) !important;
  font-size: 3rem;
}
.product-description{
  max-height: 350px;
  overflow: auto;

}
.product-buttons{
}
.product-image-preview{
  max-height: 100px;
}
.badge{
  opacity: .3;
}
</style>
