<template lang="pug">
.container.my-5(data-aos="fade-down")
  h1.text-center() {{ $store.state.settings.about_us_component_title }}
  .about
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
  background-color: #fff;
}

</style>
