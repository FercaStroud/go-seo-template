<template lang="pug">
.content.relative.flex.flex-col.justify-center.items-center.mb-20
  .container.mx-auto
    template(v-for="(post, key) in $store.state.posts" :key="key")
      Post(
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
    this.$store.dispatch("loadPosts");
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
