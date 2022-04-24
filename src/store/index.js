import { createStore } from "vuex";
import postService from "../services/posts";
import imageService from "../services/images";

const store = createStore({
  state() {
    return {
      posts: {},
      projects: {},
      baseUrl: import.meta.env.VITE_BASE_URL,
    };
  },
  getters: {
    posts: (state) => state.posts,
    projects: (state) => state.projects,
    baseUrl: (state) => state.baseUrl,
  },
  mutations: {
    setPosts(state, initialPosts) {
      state.posts = initialPosts;
    },
    setProjects(state, initialProjects) {
      state.projects = initialProjects;
    },
  },
  actions: {
    loadPosts({ commit }) {
      postService.getAll().then((initialPosts) => {
        commit("setPosts", initialPosts);
      });
    },
    loadProjects({ commit }) {
      imageService.getAll().then((initialProjects) => {
        commit("setProjects", initialProjects);
      });
    },
  },
});

export default store;
