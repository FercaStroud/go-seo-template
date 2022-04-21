<template>
  <div class="banner my-5">
    <div class="background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#70d6ff"
          fill-opacity="1"
          d="M0,64L48,80C96,96,192,128,288,149.3C384,171,480,181,576,176C672,171,768,149,864,133.3C960,117,1056,107,1152,138.7C1248,171,1344,245,1392,282.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>

    <div class="container mx-auto">
      <Carousel :wrap-around="true">
      <Slide  v-for="slide in 1" :key="slide">
        <div class="container mx-auto flex flex-col sm:flex-row">
          <div
            class="
              img-container
              basis-1/2
              flex
              justify-center
              items-center
              p-0
              sm:pl-5
            "
          >
            <img
              :src="
                false
                  ? '/images/home/banner-stand.jpg'
                  : 'https://via.placeholder.com/1300x900/cccccc/222222'
              "
              alt=""
              class="img"
            />
          </div>
          <div class="text basis-1/2 p-5 sm:p-10 flex flex-col justify-center">
            <div class="img-container flex justify-center items-center mb-10">
              <img
                :src="
                  false
                    ? '/logo.png'
                    : 'https://via.placeholder.com/550x200/cccccc/222222?text=your logo'
                "
                alt=""
              />
            </div>
            <p class="font-normal text-2xl sm:text-3xl lg:text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Banner",
  setup() {
    useMeta({});
  },
  data() {
    return {
      foo: "",
    };
  },
  methods: {
    onSubmit() {
      alert(this.foo);
      this.foo = "";
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
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

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
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
.img {
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}

.img-container img {
  width: 100%;
  height: auto;
}

.form {
  border-radius: 0.25rem 1rem 0.25rem 1rem;
  box-shadow: 0px 0px 2.7px rgba(0, 0, 0, 0.022),
    0px 0px 6.9px rgba(0, 0, 0, 0.031), 0px 0px 14.2px rgba(0, 0, 0, 0.039),
    0px 0px 29.2px rgba(0, 0, 0, 0.048), 0px 0px 80px rgba(0, 0, 0, 0.07);
}
.custom-input {
  border-radius: 0.25rem 0 0 1rem;
}
.submit {
  background-color: #0092cc;
  padding: 0.2rem 1rem;
  border-radius: 0 1rem 0.25rem 0;
  transition: all 0.35s ease;
}
.submit:hover {
  background-color: #70d6ff;
}
</style>