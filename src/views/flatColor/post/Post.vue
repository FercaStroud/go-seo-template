<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div
      class="
        content
        relative
        container
        mx-auto
        flex flex-col
        items-center
        my-10
      "
    >
      <div class="img-container">
        <div class="img flex justify-center items-center mx-auto">
          <p>1536x400</p>
        </div>
      </div>
      <h1 class="title font-black text-2xl sm:text-3xl my-10">Post title</h1>
      <div class="post-content md:text-md xl:text-lg px-5 mb-5">
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ea
          voluptas maiores provident obcaecati at repellendus vero quidem,
          accusamus veritatis molestias repudiandae ad cumque numquam deserunt
          harum nihil quibusdam consectetur!
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          pariatur dolores nam mollitia sint voluptates esse nulla modi
          architecto reiciendis!
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, atque
          nisi ipsa consequatur cum eos facere voluptates quod id dolores
          officia asperiores quis aliquam assumenda ab beatae mollitia dolor
          ducimus!
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          facilis!
        </p>
        <p class="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum illo
          architecto perspiciatis magnam similique repellat laudantium cum?
          Expedita, minus sapiente!
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          dignissimos accusantium mollitia dolore. Est ducimus quas, vero
          consequatur quia commodi praesentium distinctio ex eos voluptas, aut
          magni maxime tenetur earum?
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam
          vitae, et accusamus iure consequatur.
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius mollitia
          eveniet fugit at sed voluptates doloremque quaerat animi quia
          explicabo.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "post",
  components: {
    Navbar,
    Footer,
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

.title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -10px;
  height: 5px;
  width: 100%;
  border-radius: 1rem;
  background-color: #ff70a6;
}

.img-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img {
  height: 400px;
  width: 1536px;
  background-color: #ccc;
}
</style>