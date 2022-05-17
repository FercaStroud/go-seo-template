<template lang="pug">
.content
  .container.mx-auto.p-2
    .ql-editor(v-html="$store.state.settings.privacy_policy")
</template>

<script>

export default {
  name: "PrivacyPolicy",
  mounted() {
    console.log(
    )
  },
  components: {
  },
};
</script>

<style scoped>
@import "../../styles/quill-core.css";

.content {
  margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 5rem;
  }
}

</style>
