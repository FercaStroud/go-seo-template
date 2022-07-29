<template lang="pug">
.container.mx-auto.my-5
  h1.title-primary-glass.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) {{ $store.state.settings.about_us_component_title }}
  .about.flex.flex-col.justify-center.items-center.text-center.p-5(class="sm:p-10")
    .ql-editor(v-html="$store.state.settings.about" )

</template>

<script>
export default {
  name: "About",
  data() {
    return {
    };
  },
  mounted() {

  },
};
</script>

<style scoped>
@import "../../../../../styles/quill-core.css";
.about {
  background-color: #eee;
}

</style>
