<template>
  <div class="portfolio-container flex flex-col">
    <Navbar />
    <div
      class="
        portfolio
        font-mono
        max-w-screen-2xl
        2xl:mx-auto
        flex flex-col
        items-center
        justify-center
        px-5
      "
    >
      <h2
        class="
          section-title
          font-black
          text-center text-xl
          sm:text-3xl
          mt-5
          mb-2
        "
      >
        Lorem ipsum dolor sit amet.
      </h2>
      <section class="portfolio flex flex-row flex-wrap justify-center">
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, et?"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 2"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nobis!"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis?"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ratione."
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 5"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos!"
        />
      </section>

      <h2
        class="section-title font-black text-center text-xl sm:text-3xl my-10"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h2>
      <section class="portfolio flex flex-row flex-wrap justify-center">
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, et?"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 2"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nobis!"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis?"
        />
      </section>

      <h2
        class="section-title font-black text-center text-xl sm:text-3xl my-10"
      >
        Lorem, ipsum dolor.
      </h2>
      <section class="portfolio flex flex-row flex-wrap justify-center mb-5">
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 1"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, et?"
        />
        <Item
          url="https://via.placeholder.com/500x500/555555"
          title="project 2"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, nobis!"
        />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Item from "./components/Item.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "SoberPortfolio",
  components: {
    Navbar,
    Item,
    Footer,
  },
};
</script>

<style scoped>
.portfolio-container {
  background-color: #222;
  color: white;
}
.portfolio {
  margin-top: 66px;
}
@media screen and (max-width: 639px) {
  .portfolio-container {
    margin-top: 98px;
  }
}
.section-title {
  position: relative;
}
.section-title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: #f87575;
}
</style>