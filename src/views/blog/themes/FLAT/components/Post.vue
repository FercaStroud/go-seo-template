<template lang="pug">
.row
  .col-md-12.text-center
    strong.title-primary-flat.font-black(style="text-align:center;font-size:2em") {{ title }}
  .col-md-12
    img.img-fluid(
      :src="img_src ? PUBLIC_ASSETS + 'images/posts/' + img_src : 'https://via.placeholder.com/300x300'",
      :alt="title"
    )

  .ql-editor(v-html="description")
  hr
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  props: {
    img_src: "",
    title: "",
    description: "",
  },
};
</script>

<style scoped lang="scss">
@import "../../../../../styles/quill-core.css";
h2, .img-container {
  padding: 12px 15px;
}
hr {
  width: 100%;
}
</style>
