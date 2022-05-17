<template lang="pug">
.features-container.container.mx-auto
  .about.text-center.flex.flex-col.justify-center.items-center.gap-5.p-10.mt-10(class='sm:px-20')
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
@import "../../../styles/quill-core.css";
.about {
  background-color: #eee;
}

</style>
