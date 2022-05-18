<template lang="pug">
.content.flex.flex-col.items-center.relative.container.mx-auto
  //- Modal
  .modal-container.fade-in.fixed.w-full.top-0.flex.justify-center.items-center(
    v-if="showModal",
    @click="() => this.showModal = false"
  )
    .container.mx-auto.flex.justify-center.items-center.p-5(class="sm:p-0")
      .modal.p-5.flex-flex-col.items-center.justify-center
        h1.title-primary.font-black.text-2xl.mb-5(class="sm:text-3xl") {{ modalTitle }}
        .img-container.flex.justify-center.items-center
          img(
            :src="modalImage ? PUBLIC_ASSETS + 'images/portfolios/' + modalImage : 'https://via.placeholder.com/300x300'",
            :alt="modalTitle"
          )

  //- Galery
  .flex.flex-wrap.justify-center.items-center.mb-5
    template(v-for="(image, key) in $store.state.images", :key="key")
      .img-container.flex.justify-center.-items-center.basis-full.aspect-video.overflow-hidden.p-2.mb-2(
        class="sm:basis-1/2 lg:basis-1/3"
      )
        img.h-full.w-auto(
          @click="handleModal(key)",
          :src="PUBLIC_ASSETS + 'images/portfolios/' + image.src"
        )
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
      showModal: false,
      modalTitle: "",
      modalImage: "",
    };
  },
  mounted() {
    this.$store.dispatch("loadPortfolio");
  },
  methods: {
    handleModal(index) {
      this.showModal = !this.showModal;
      const image = this.$store.state.images[index];
      this.modalTitle = image.title;
      this.modalImage = image.src;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
.content {
  margin-top: 4.5rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 7.5rem;
  }
}

.modal-container {
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 9999;

  .modal {
    background-color: #eee;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
      100px 100px 80px rgba(0, 0, 0, 0.07);
  }

  .img-container img {
    max-height: 70vh;
  }
}
</style>
