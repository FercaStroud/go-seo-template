<template lang="pug">
.content
  .container.mx-auto.p-2.mb-5(class="md:px-12 py-5")
    .ql-editor(v-html="$store.state.settings.privacy_policy")
</template>

<script>

export default {
  name: "FlatPrivacyPolicy",
  mounted() {
    console.log(
    )
  },
  components: {
  },
};
</script>

<style scoped>
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
