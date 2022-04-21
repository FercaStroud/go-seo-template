<template>
  <div class="description-container container mx-auto">
    <template v-for="(post, i) in posts" :key="i">
      <DescriptionElement
        :title="post.title"
        :description="post.description"
        :img="`http://panel.appsgorilasonline.com/uploads/images/posts/${post.image_src}`"
        :textSide="i % 2 == 0 ? 'left' : 'right'"
      />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DescriptionElement from "./DescriptionElement.vue";

export default {
  name: "Description",
  computed: mapState(["posts"]),
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  components: {
    DescriptionElement,
  },
};
</script>

<style scoped>
/* .title {
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
  background-color: #ff70a6;
} */
</style>