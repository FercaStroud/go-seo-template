<template lang="pug">
div
  .container(style="margin-top:90px")
    .row
      .col
        h1.text-center() {{ service.title }}
    .row
      .col(v-html="service.description" )


</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      service:{}
    };
  },
  mounted() {
    this.$nextTick(function (){
      (this.$store.state.services).forEach(function (value){
        if(value.id === parseInt(this.$route.params.id)){
          this.service = value;
        }


      }.bind(this))
    }.bind(this))

  },
}
</script>

<style>
img{
  max-width: 100% !important;
}
</style>
