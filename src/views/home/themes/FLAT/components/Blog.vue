<template lang="pug">
.container.my-5(data-aos="fade-down")
  h1.text-center() {{ $store.state.settings.blog_component_title }}

  router-link(to='/blog').row.text-bg-light(style="text-decoration:none")
    template(
      v-for="(post, key) in $store.state.posts"
      :key="key"
    )
      .col-md-4.col-sm-12.my-1(v-if="key<6" )
        .card.shadow-sm
          img.w-full.h-auto(
            :src="post.image_src ? PUBLIC_ASSETS + 'images/posts/' + post.image_src : 'https://via.placeholder.com/300x300'",
            alt=""
          )
          .card-body
            p.card-text.text-center
              | {{ post.title.length >= 30 ? post.title.substring(0, 30) + '...' : post.title }}

</template>

<script>
export default {
  name: "Blog",
  mounted() {
    this.$store.dispatch("loadPosts").then(function (){
      AOS.init();
    })
  },
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
};
</script>
