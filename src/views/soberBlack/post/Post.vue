<template>
  <div class="flex flex-col">
    <Navbar />
    <div
      class="
        post-container
        font-mono
        max-w-screen-2xl
        2xl:mx-auto
        flex flex-col
        px-5
        mb-20
        w-full
      "
    >
      <img
        src="https://via.placeholder.com/1536x400/555555"
        alt=""
        class="mx-auto"
      />
      <div class="title-box flex justify-start">
        <h1 class="title font-black text-2xl sm:text-3xl mt-5 mb-5">
          post title
        </h1>
      </div>
      <div class="content text-base md:text-md xl:text-lg">
        <p class="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, fuga
          quos eos debitis adipisci nemo doloremque itaque velit sapiente
          quibusdam iusto veritatis maxime porro, officia esse nisi officiis, in
          natus neque? Dolorem ipsa aspernatur iusto nihil soluta accusantium id
          impedit doloribus iure aperiam dolor commodi, doloremque dolore sint
          deleniti ut.
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam soluta
          animi architecto adipisci, voluptas magnam ea quis sequi explicabo
          dolor.
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aliquid voluptates molestiae maiores fugit facere dolore minus
          reiciendis quasi sit quo, deleniti nihil voluptatem. Commodi
          repellendus officia nesciunt molestias nam repudiandae vero quasi
          quidem et. Sapiente pariatur quod cumque, provident nemo autem libero
          tempora quaerat eos officia saepe deserunt illo.
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae aliquam
          aspernatur sapiente totam ipsam quibusdam ipsa voluptatem magni ad
          quam?
        </p>
        <p class="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          expedita dolore qui illo? Minus nesciunt beatae odit mollitia impedit,
          delectus ducimus repellendus nihil fuga voluptatum non provident
          placeat, molestias iste. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Sit dolorem nihil error eius excepturi autem!
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          pariatur, culpa voluptate beatae officia neque expedita quae
          explicabo. In, soluta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus reiciendis odio nesciunt officia quos
          tenetur?
        </p>
        <p class="mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nostrum
          ullam dolore sapiente, obcaecati quasi qui deserunt cupiditate omnis
          minus accusamus corrupti commodi neque voluptatum repellendus officiis
          libero. Sunt, ut.
        </p>
        <i class="mb-5">— Lorem, ipsum.</i>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "SoberPost",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.post-container {
  margin-top: 66px;
}
@media screen and (max-width: 639px) {
  .post-container {
    margin-top: 98px;
  }
}
.title {
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: #f87575;
}
</style>