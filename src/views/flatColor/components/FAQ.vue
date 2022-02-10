<template>
  <div class="FAQ-container container mx-auto">
    <div
      class="FAQ flex flex-col justify-center items-center gap-5 p-10 sm:px-20"
    >
      <h2 class="title main-title font-black text-xl sm:text-2xl">FAQ</h2>
      <div class="questions flex flex-col sm:flex-row flex-wrap">
        <div class="question basis-1/2 p-5">
          <div class="title-box flex">
            <h3 class="title font-black text-lg mb-2">
              Lorem ipsum dolor sit amet?
            </h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            dolorum saepe eveniet ipsa perspiciatis itaque quidem ea expedita
            magnam sed.
          </p>
        </div>

        <div class="question basis-1/2 p-5">
          <div class="title-box flex">
            <h3 class="title font-black text-lg mb-2">Lorem, ipsum dolor?</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            blanditiis aspernatur provident molestias quisquam placeat.
          </p>
        </div>

        <div class="question basis-1/2 p-5">
          <div class="title-box flex">
            <h3 class="title font-black text-lg mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit?
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            sapiente dolorem molestiae perspiciatis qui sunt sit odio numquam
            nemo quasi!
          </p>
        </div>

        <div class="question basis-1/2 p-5">
          <div class="title-box flex">
            <h3 class="title font-black text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur?
            </h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iusto optio modi enim. Vel, nemo. Tenetur, sequi rerum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style scoped>
.FAQ {
  background-color: #eee;
}
.title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -5px;
  height: 5px;
  width: 100%;
  border-radius: 1rem;
  background-color: #0092cc;
}
.main-title::after {
  background-color: #ff70a6;
}
</style>