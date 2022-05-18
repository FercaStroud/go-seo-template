<template lang="pug">
.flex.flex-col.flex-wrap.p-5.mb-5(class="md:mb-10 md:flex-row")
  .flex.items-center.basis-full(class="md:basis-1/3")
    img(:src="img_src || 'https://via.placeholder.com/300x300'", :alt="title")

  .text.flex.flex-col.justify-center.pt-5.text-center.basis-full(
    class="sm:text-left md:basis-2/3 md:px-10"
  )
    h2.title-primary.font-black.text-md.mb-2(class="md:text-xl") {{ title }}
    .ql-editor(v-html="description")
</template>

<script>
export default {
  name: "Post",
  props: {
    img_src: "",
    title: "",
    description: "",
  },
};
</script>

<style scoped lang="scss">
@import "../../../styles/quill-core.css";
h2 {
  padding: 12px 15px;
}
</style>