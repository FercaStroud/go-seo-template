<template lang="pug">
.flex.flex-col.flex-wrap.p-5.mb-5(class="md:mb-10 md:flex-row")
  .text.flex.flex-col.justify-center.pt-5.text-center.basis-full.mb-5(
    class="sm:text-left"
  )
    h2.title-primary.font-black.text-2xl(class="md:text-3xl") {{ title }}

  .img-container.flex.items-center.basis-full
    img(
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
@import "../../../styles/quill-core.css";
h2, .img-container {
  padding: 12px 15px;
}
hr {
  width: 100%;
}
</style>