<template lang="pug">
.container.mx-auto.flex.flex-wrap.justify-center.mb-5
  .title-primary-sober.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) {{ $store.state.settings.blog_component_title }}

  .flex.flex-col.justify-center.items-center.text-center
    .features.flex.flex-wrap.justify-center.items-center
      template(v-for="(post, key) in $store.state.posts", :key="key")
        template(v-if="key < 3")
          .basis-full.p-2(class="basis-1/3")
            .border.p-5
              .img-container.flex.justify-center.items-center.mb-2(class="sm:mb-5")
                img.w-full.h-auto(
                  :src="post.image_src ? PUBLIC_ASSETS + 'images/posts/' + post.image_src : 'https://via.placeholder.com/300x300'",
                  alt=""
                )
              .flex.justify-center.items-center.h-20.mb-5
                h3.title-primary-sm-glass.font-black.text-md(class="sm:text-xl") {{ post.title.length >= 45 ? post.title.substring(0, 42) + '...' : post.title }}
              .h-48.overflow-hidden.mb-5
                .ql-editor(v-html="post.description")
              .flex.justify-center.items-center
                a.primary-button(href="/blog") ir a blog
</template>

<script>
export default {
  name: "Blog",
  mounted() {
    this.$store.dispatch("loadPosts");
  },
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
};
</script>
