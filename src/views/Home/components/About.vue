<template lang="pug">
.features-container.container.mx-auto.mt-10.mb-0(class="sm:mb-10")
  .about.text-center.flex.flex-col.justify-center.items-center.p-5(class="sm:p-10")
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
