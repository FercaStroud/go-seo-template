<template lang="pug">
.content
  Banner(style="margin-top:90px")
  Offers
  About
  .container.my-5#section(data-aos="fade-down")
    h1.text-center() {{ $store.state.settings.clients_component_title }}
    .row.mt-4
      .col.mt-2(style="cursor:pointer" @click="product = products[0]; scrolltoId()")
        img(style="width:100%" :src="products[0].img")
      .col.mt-2(style="cursor:pointer" @click="product = products[1]; scrolltoId()")
        img(style="width:100%" :src="products[1].img")
      .col.mt-2(style="cursor:pointer" @click="product = products[2]; scrolltoId()")
        img(style="width:100%" :src="products[2].img")
      .col.mt-2(style="cursor:pointer" @click="product = products[3]; scrolltoId()")
        img(style="width:100%" :src="products[3].img")
    .row.mt-5.mb-5(v-if="product.descImg" )
      .col-md-12(style="text-align:center")
        h4 {{product.title}}
        b {{product.subTitle}}
        img(v-for="img in product.descImg" style="width:100%" :src="img")
    .row.mt-4
      .col-md-3.mt-2(style="cursor:pointer" @click="product = products[4]; scrolltoId()")
        img(style="width:100%" :src="products[4].img")
      .col-md-3.mt-2(style="cursor:pointer" @click="product = products[5]; scrolltoId()")
        img(style="width:100%" :src="products[5].img")
      .col-md-3.mt-2(style="cursor:pointer" @click="product = products[6]; scrolltoId()")
        img(style="width:100%" :src="products[6].img")
  Services
  Blog
  Contact
</template>

<script>
import Offers from "../../../../components/offers/Offers.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Blog from "./components/Blog.vue";
import ClientsProviders from "../../../../components/clientsProviders/ClientsProviders.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "Home",
  data() {
    return {
      product:{
        id:0,
        title: '',
        subTitle: '',
        img: '',
        descImg: '',
      },
      products:[
        {
          id:1,
          title: 'COMPRA - VENTA',
          subTitle: 'DE FORRAJES DE TEMPORADA',
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/JqVylqIoHrsNetcuKSUgx1HufrCjxhWQ4JyeQAIQKqqKHh4Qb9t23ndG2gGNO8qo4UVm.jpg',
          descImg: ['https://panel.appsgorilasonline.com/uploads/images/slides/nQkH4mKIP3OpNDd1965uAvFJItTFYjqEuIb66o6TeF3wlmGEIOI4z4Q6pFfeoTES0uyh.jpg'],
        },
        {
          id:2,
          title: 'BUFERIZANTES',
          subTitle: '',
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/weKWPNd2uUHJ22qOCdPAcSdubEArwzpnm9GktxVqJPDKPfGzDMhMDWwiaIucQ5Bcl7Rx.jpg',
          descImg: [
            'https://agrobroker.com.mx/download.jpg',
          ],
        },
        {
          id:3,
          title: 'LEVADURA',
          subTitle: '',
          descImg: [
            'https://agrobroker.com.mx/LEVADURA.jpg',
          ],
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/YwdR3oVCKEFNNz7776bfal596W2aPkNlT4hC5IEfmpF4FC6WGN5nDSsXuZzL9yZPTEIr.jpg',
        },
        {
          id:4,
          title: 'INOCULANTES',
          subTitle: 'LALLEMAND',
          descImg:[
            'https://agrobroker.com.mx/INOCULANTES1.jpg',
            'https://agrobroker.com.mx/INOCULANTES2.jpg',
            'https://agrobroker.com.mx/INOCULANTES3.jpg',
          ],
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/YnQiAb4lg5gskBR6WkBcYSV1VXUhPd8NlJQwlFHOVms3ea9llTS04Yz6J41JSiMuKbpO.jpg',
        },
        {
          id:5,
          title: 'MINERALES',
          subTitle: '',
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/ADMiyiMTsm2pA0Mk6lGYKfuZ7dpqLdxwm3gvltdDTlQ2WA5N0ImtX5UeGDrtaZ3Fgjyl.jpg',
          descImg: [
            'https://agrobroker.com.mx/minerales.jpg',
          ],
        },
        {
          id:6,
          title: 'PLÁSTICOS',
          subTitle: 'LALLEMAND',
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/jCJHUPSMgAmuH3dN8Ragedo2IYobcbRcVnouBgRaVDR5F68o2MgCQ31NomBwpasu0ELg.jpg',
          descImg: [
              'https://agrobroker.com.mx/PLASTICO1.jpg',
              'https://agrobroker.com.mx/PLASTICO2.jpg',
          ],
        },
        {
          id:7,
          title: 'ARETES',
          subTitle: '',
          img: 'https://panel.appsgorilasonline.com/uploads/images/portfolios/DV5aGfghLfW873FivPczstayx089vNY8bnfG0k0mJsPLTwRTH4poNtCS8hF96VpHHEj4.jpg',
          descImg: [
            'https://agrobroker.com.mx/download(1).jpg',
            'https://agrobroker.com.mx/download(2).jpg',
            'https://agrobroker.com.mx/download(3).jpg',
            'https://agrobroker.com.mx/download(4).jpg',
            'https://agrobroker.com.mx/download(5).jpg',
          ],
        },
      ]
    };
  },
  methods: {
    scrolltoId(){
      var access = document.getElementById("section");
      access.scrollIntoView({behavior: 'smooth'}, true);
    }
  },
  components: {
    Offers,
    Banner,
    About,
    Services,
    Blog,
    ClientsProviders,
    Contact,
  },
};
</script>

<style scoped lang="scss">
.content {
  //margin-top: 4rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    Margin-top: 10.5rem;
  }
}

</style>
