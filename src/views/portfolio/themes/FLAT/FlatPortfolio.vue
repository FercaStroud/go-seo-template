<template lang="pug">
.container.my-5.pt-5(data-aos="fade-down")
  h1.pt-5.text-center() {{ $store.state.settings.portfolio_component_title }}

  .row
    .col-md-4.col-sm-12.my-2(v-for="(image, key) in $store.state.images" :key="key")
      img.img-fluid.pointer(
        :src="PUBLIC_ASSETS + 'images/portfolios/' + image.src",
        :alt="modalTitle"
        @click="modalImage=image;showModal = true;"
      )
      .text-center
        span {{ image.title.length >= 35 ? image.title.substring(0, 35) + '...' : image.title }}

  vue-final-modal(v-model="showModal")
    .container
      button.btn.close-modal(@click="showModal = false") Cerrar

      .row.my-5.pt-5.justify-content-md-center
        .col-md-12.pt-5(style="text-align:center;")
          br/
          br/
          strong.color-white.pt-5(style="text-align:center;font-size:2em") {{modalImage.title}}
      .row.justify-content-md-center(style="background:white;padding:20px")
        .col-md-6.col-sm-12
          img.img-fluid(
            :src="PUBLIC_ASSETS + 'images/portfolios/' + modalImage.src",
            :alt="modalImage.title"
          )
        .col
          p(v-if="modalImage.title === 'Alfalfa'" ) La alfalfa es un cultivo forrajero muy popular entre los ganaderos debido a que es altamente digerible y rico en nutrientes esenciales como proteínas, carbohidratos, vitaminas y minerales. Además, puede mejorar la salud y la producción de leche del ganado, mientras reduce los costos de alimentación. En general, la alfalfa es una excelente opción como alimento para el ganado por sus beneficios nutricionales y su rentabilidad.
          p(v-if="modalImage.title === 'Avena'" ) La avena es una fuente nutritiva y rentable de alimento para el ganado debido a su alto contenido de energía, su digestibilidad, su capacidad para mejorar la salud intestinal y fortalecer los huesos, y su rentabilidad. En general, la avena es una excelente opción para alimentar al ganado debido a sus numerosos beneficios para la salud y el rendimiento animal.
          p(v-if="modalImage.title === 'Rastrojo de maíz'" ) El rastrojo de maiz es un alimento vegetal comun en la alimentacion del ganado debido a su alto contenido de fibra, energia, nutrientes y disponibilidad. Además, su uso como subproducto de la producción de maíz lo convierte en una opción sostenible. En general, el rastrojo de maíz es una fuente valiosa y económica de alimento para el ganado.
          p(v-if="modalImage.title === 'Pajas'" ) La paja es un alimento economico y de alto contenido en fibra utilizado en la alimentacion del ganado. Es una fuente valiosa de alimento debido a su disponibilidad, capacidad de reducir residuos, fortalecedor dental, control de peso y beneficios digestivos. Sin embargo, es importante complementarla con otros alimentos para asegurar una dieta equilibrada.
          p(v-if="modalImage.title === 'Compra y venta de forrajes de temporada'") Ofrecemos un servicio de compra y venta de forrajes de temporada durante todo el año, incluyendo variedades como alfalfa, avena, rastrojo de maíz y paja. Proporcionamos descripciones detalladas de cada tipo de forraje, así como la opción de comprar y vender a granel y un servicio de entrega seguro. Nos enfocamos en brindar una experiencia de compra y venta sin problemas y un servicio excepcional a nivel nacional.


</template>

<script>
export default {
  name: "FlatPortfolio",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      showModal: false,
      modalTitle: "",
      modalImage: [],
    };
  },
  mounted() {
    let vm = this;
    this.$store.dispatch("loadPortfolio").then(function (){
      vm.$forceUpdate;
    });
  },
  methods: {
  },
  components: {},
};
</script>

<style scoped lang="scss">
.close-modal{
  position: fixed;
  top: 108px;
  right: 9px;
  background: white;
}
</style>
