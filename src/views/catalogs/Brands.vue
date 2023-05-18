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
  name: "CatBrands",
  data() {
    return {
      images:[
          "CatálogoDeMarcas-Peeisa_page-0001.jpg",
          "CatálogoDeMarcas-Peeisa_page-0002.jpg",
          "CatálogoDeMarcas-Peeisa_page-0003.jpg",
          "CatálogoDeMarcas-Peeisa_page-0004.jpg",
          "CatálogoDeMarcas-Peeisa_page-0005.jpg",
          "CatálogoDeMarcas-Peeisa_page-0006.jpg",
          "CatálogoDeMarcas-Peeisa_page-0007.jpg",
          "CatálogoDeMarcas-Peeisa_page-0008.jpg",
          "CatálogoDeMarcas-Peeisa_page-0009.jpg",
          "CatálogoDeMarcas-Peeisa_page-0010.jpg",
          "CatálogoDeMarcas-Peeisa_page-0011.jpg",
          "CatálogoDeMarcas-Peeisa_page-0012.jpg",
          "CatálogoDeMarcas-Peeisa_page-0013.jpg",
          "CatálogoDeMarcas-Peeisa_page-0014.jpg",
          "CatálogoDeMarcas-Peeisa_page-0015.jpg",
          "CatálogoDeMarcas-Peeisa_page-0016.jpg",
          "CatálogoDeMarcas-Peeisa_page-0017.jpg",
          "CatálogoDeMarcas-Peeisa_page-0018.jpg",
          "CatálogoDeMarcas-Peeisa_page-0019.jpg",
          "CatálogoDeMarcas-Peeisa_page-0020.jpg",
          "CatálogoDeMarcas-Peeisa_page-0021.jpg",
      ]
    };
  },
}
</script>

<style scoped>

</style>
