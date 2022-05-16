<template lang="pug">
.banner.my-5
  .background
    svg(xmlns='http://www.w3.org/2000/svg' viewbox='0 0 1440 320')
      path(fill='#FF6A00' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,176C672,171,768,149,864,133.3C960,117,1056,107,1152,138.7C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z')
  .container.mx-auto
    carousel(:wrap-around='true' :autoplay='5000' :transition='500')
      slide(v-for='(slide, key) in $store.state.slides' :key='key')
        .container.mx-auto.flex.flex-col(class='sm:flex-row')
          .img-container.flex.justify-center.items-center.p-0(class='basis-1/2 sm:pl-5')
            img(:src='PUBLIC_ASSETS + "images/slides/" + slide.src' :alt='slide.title')

</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Banner",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS
    }
  },
  mounted() {
    this.$store.dispatch('loadSlides');
  },
  components: {
    Carousel,
    Slide,
  }
};
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #70d6ff;
  color: #222;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}

.banner {
  position: relative;
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.img-container img {
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}
</style>
