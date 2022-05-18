<template lang="pug">
.container.mx-auto.my-5
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
@import "../../../styles/quill-core.css";
.about {
  background-color: #eee;
}

</style>
