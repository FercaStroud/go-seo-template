<template>
  <div class="font-sans fade-in">
    <Navbar />
    <div class="content relative container mx-auto flex flex-col items-center">
      <h1 class="title font-black text-2xl sm:text-3xl mt-10 mb-5">
        portfolio
      </h1>

      <div v-if="showModal" class="modal fixed container fade-in py-5 sm:p-5">
        <div class="project flex flex-col sm:flex-row">
          <div
            class="
              img-container
              basis-full
              sm:basis-1/2
              flex
              justify-center
              p-5
            "
          >
            <img
              :src="
                modalImage
                  ? modalImage
                  : 'https://via.placeholder.com/500x500/222222/ffffff'
              "
              alt=""
              class="modal-img"
            />
          </div>
          <div
            class="
              text
              basis-full
              sm:basis-1/2
              flex flex-col
              gap-5
              items-start
              p-5
            "
          >
            <h1 class="title font-black text-xl sm:text-2xl">
              {{ modalTitle }}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              obcaecati dolores adipisci aperiam officia sunt expedita
              voluptatibus commodi! Nam velit perspiciatis fugiat voluptatum
              aliquid architecto omnis itaque enim officia veniam.
            </p>
            <button @click="handleModal(0)" class="modal-button">close</button>
          </div>
        </div>
      </div>

      <div class="columns-1 gap-5 sm:columns-2 md:columns-3 my-5 sm:mb-10">
        <template v-for="(project, i) in projects" :key="i">
          <img
            @click="handleModal(i)"
            :src="project.url"
            alt=""
            class="w-full pb-5"
          />
        </template>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const response = [
  {
    title: "project 1",
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "project 2",
    url: "https://images.unsplash.com/photo-1640622844217-a51dd0f51d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "project 3",
    url: "https://images.unsplash.com/photo-1644867587945-0e2e2f7a1217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "project 4",
    url: "https://images.unsplash.com/photo-1644867587931-42c13eee98ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "project 5",
    url: "https://images.unsplash.com/photo-1644886267519-e41524d8ce02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "project 6",
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "project 7",
    url: "https://images.unsplash.com/photo-1644792863360-40fa85ea52e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "project 8",
    url: "https://images.unsplash.com/photo-1644853347773-6274a23ef868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

export default {
  name: "Portfolio",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      showModal: false,
      projects: response,
      modalTitle: "",
      modalImage: "",
    };
  },
  methods: {
    handleModal(index) {
      this.showModal = !this.showModal;
      const project = this.projects[index];
      this.modalTitle = project.title;
      this.modalImage = project.url;
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

.modal {
  top: 8vh;
  z-index: 1;
}
.modal-img {
  max-height: 60vh;
  width: auto;
}
@media screen and (max-width: 639px) {
  .modal {
    top: 10vh;
  }
  .modal .img-container {
    max-height: 70%;
  }
  .modal-img {
    max-height: 40vh;
    height: 100%;
  }
}

.project {
  max-height: 90vh;
  background-color: #eee;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
.modal-button {
  background-color: #ff70a6;
  color: white;
  padding: 0.2rem 2rem;
  transition: all 0.35s ease;
}
.modal-button:hover {
  background-color: #ff1f75;
}
</style>