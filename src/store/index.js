import { createStore } from "vuex";
import postService from "../services/posts";

const store = createStore({
  state() {
    return {
      posts: {},
    };
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    setPosts(state, initialPosts) {
      state.posts = initialPosts;
    },
  },
  actions: {
    loadPosts({ commit }) {
      postService.getAll().then((initialPosts) => {
        commit("setPosts", initialPosts);
      });
    },
  },
});

export default store;
