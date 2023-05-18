<template>
<div class="container">
  <div class="row">
    <div class="col-md-12" v-for="image in images">
      <img style="width: 100%" :src="'https://peeisa.com/'+image" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CatPeeisa",
  data() {
    return {
      images:[
          "Folleto-Peeisa_page-0001.jpg",
          "Folleto-Peeisa_page-0002.jpg",
      ]
    };
  },
}
</script>

<style scoped>

</style>
