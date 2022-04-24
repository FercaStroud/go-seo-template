<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content relative container mx-auto flex flex-col items-center">
      <h1 class="title-primary font-black text-2xl sm:text-3xl mt-10 mb-5">
        portfolio
      </h1>

      <div
        v-if="showModal"
        class="
          modal-container
          fade-in
          fixed
          w-full
          top-0
          flex
          justify-center
          items-center
        "
      >
        <div
          class="container mx-auto p-5 sm:p-0 flex justify-center items-center"
        >
          <div class="modal p-5 flex flex-col items-center">
            <div class="flex w-full justify-between py-5">
              <h1 class="title-primary font-black text-xl sm:text-2xl">
                {{ modalTitle }}
              </h1>

              <button @click="handleModal(0)" class="modal-button">
                cerrar
              </button>
            </div>

            <div class="img-container flex justify-center items-center">
              <img
                :src="
                  modalImage
                    ? `http://panel.appsgorilasonline.com/uploads/images/${modalImage}`
                    : 'https://via.placeholder.com/500x500/222222/ffffff'
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center mb-5">
        <template v-for="(project, i) in projects" :key="i">
          <div
            class="
              img-container
              basis-full
              sm:basis-1/2
              lg:basis-1/3
              aspect-video
              overflow-hidden
              flex
              justify-center
              items-center
              p-2
            "
          >
            <img
              @click="handleModal(i)"
              :src="`${this.baseUrl}/uploads/images/${project.src}`"
              alt=""
              class="w-full"
            />
          </div>
        </template>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Portfolio",
  components: {
    Navbar,
    Footer,
  },
  computed: mapState(["projects", "baseUrl"]),
  mounted() {
    this.$store.dispatch("loadProjects");
  },
  data() {
    return {
      showModal: false,
      modalTitle: "",
      modalImage: "",
    };
  },
  methods: {
    handleModal(index) {
      this.showModal = !this.showModal;
      const project = this.projects[index];
      this.modalTitle = project.title;
      this.modalImage = project.src;
    },
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

.image-grid {
  cursor: pointer;
  transition: all 0.35s ease;
}
.image-grid:hover {
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.028),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    2.2px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    4.2px 4.2px 33.4px rgba(0, 0, 0, 0.05), 10px 10px 80px rgba(0, 0, 0, 0.07);
}

.modal-container {
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 2;
}

.modal {
  background-color: #eee;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}

.modal .img-container img {
  height: 100%;
  width: auto;
  max-height: 70vh;
}

.modal-button {
  background-color: #ff70a6;
  color: white;
  padding: 0rem 0.5rem;
  transition: all 0.35s ease;
}
.modal-button:hover {
  background-color: #ff1f75;
}
</style>