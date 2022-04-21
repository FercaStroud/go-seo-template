<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content relative container mx-auto flex flex-col items-center mb-20">
      <h1 class="title-primary font-black text-2xl sm:text-3xl mt-10 mb-5">Blog</h1>

      <div class="flex flex-row flex-wrap justify-center">
        <template v-for="(card, i) in cards" :key="i">
          <Card
            class="basis-1/4"
            :img="card.img"
            :title="card.title"
            :description="card.description"
            :link="card.link"
          />
        </template>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "./components/Card.vue";
import Footer from "../components/Footer.vue";

const response = [
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam recusandae amet pariatur expedita quam, culpa natus animi obcaecati vitae dolor?",
    link: "/post-flat",
  },
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque, laudantium error voluptatem aspernatur nesciunt eos in doloribus modi voluptate.",
    link: "/post-flat",
  },
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi maiores soluta dolor blanditiis magnam explicabo in doloremque nihil? Magnam!",
    link: "/post-flat",
  },
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda, neque accusamus facilis impedit totam nulla laboriosam necessitatibus odio optio!",
    link: "/post-flat",
  },
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt minus molestiae consequatur hic vel eligendi ducimus assumenda vero aut fuga.",
    link: "/post-flat",
  },
  {
    img: "250x300",
    title: "product name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam voluptas commodi cumque sequi deserunt quos et. Voluptates, veritatis sed.",
    link: "/post-flat",
  },
];

export default {
  name: "blog",
  components: {
    Navbar,
    Card,
    Footer,
  },
  data() {
    return {
      cards: response,
    };
  },
};
</script>

<style scoped>
.content {
  margin-top: 4rem;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5rem;
  }
}
</style>