<template>
  <div class="flex flex-col">
    <Navbar />
    <div
      class="
        blog-container
        font-mono
        max-w-screen-2xl
        2xl:mx-auto
        flex flex-col
        items-center
        justify-center
        px-5
        mb-5
      "
    >
      <h2
        class="
          section-title
          font-black
          text-center text-2xl
          sm:text-3xl
          mt-5
          mb-5
        "
      >
        Blog entries
      </h2>
      <section class="portfolio flex flex-row flex-wrap justify-center">
        <Item
          img="https://via.placeholder.com/200x200/555555"
          category="category"
          title="title 1"
          date="Nov 13"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci?"
          url="/post-sober"
        />

        <Item
          img="https://via.placeholder.com/200x200/555555"
          category="category"
          title="title 2"
          date="Dec 8"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci?"
          url="/post-sober"
        />

        <Item
          img="https://via.placeholder.com/200x200/555555"
          category="category"
          title="title 3"
          date="Feb 7"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci?"
          url="/post-sober"
        />

        <Item
          img="https://via.placeholder.com/200x200/555555"
          category="category"
          title="title 4"
          date="Feb 9"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci?"
          url="/post-sober"
        />

        <Item
          img="https://via.placeholder.com/200x200/555555"
          category="category"
          title="title 5"
          date="Mar 25"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci?"
          url="/post-sober"
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
  name: "SoberBlog",
  components: {
    Navbar,
    Item,
    Footer,
  },
};
</script>

<style scoped>
.blog-container {
  margin-top: 66px;
}
@media screen and (max-width: 639px) {
  .blog-container {
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