<template lang="pug">
.container.my-5.pt-1(data-aos="fade-down")
  h1.my-5.pt-5.text-center() {{ $store.state.settings.blog_component_title }}

  template(v-for="(post, key) in $store.state.posts" :key="key")
      Post.pt-5(
        :img_src="post.image_src",
        :title="post.title",
        :description="post.description"
      )
</template>

<script>
import Post from "./components/Post.vue";
export default {
  name: "FlatBlog",
  mounted() {
    this.$store.dispatch("loadPosts").then(function (){
      AOS.init();
    })
  },
  components: {
    Post,
  },
};
</script>

<style scoped lang="scss">
@import "../../../../styles/quill-core.css";
.content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5.5rem;
  }
}
</style>
