<template lang="pug">
footer.py-3
  .container
    .row
      .col-md-3.col-sm-12
        h3.my-5.font-black.text-lg.mb-5 SITE MAP
        ul
          //li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/portfolio")
              | Portafolio
          li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/")
              | Inicio
          li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/contact")
              | Contacto
          //li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/blog")
              | Blog
          //li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/services")
              | Servicios
          //li.mb-1
            router-link.capitalize.link.primary-underline-h(to="/products")
              | Productos
      .col-md-3.col-sm-12
        h3.my-5.font-black.text-lg.mb-5 LLamanos
        ul
          li.mb-1(v-for="(phone, key) in $store.state.phones", :key="key")
            a.capitalize.link.primary-underline-h(:href="'tel:' + phone.phone")
              font-awesome-icon(:icon="['fa', 'phone']")
              | {{ ' ' + phone.title }}
      .col-md-3.col-sm-12
        h3.my-5.font-black.text-lg.mb-5 E-mail(s)
        ul
          li.mb-1(v-for="(email, key) in $store.state.emails", :key="key")
            a.link.capitalize.primary-underline-h(:href="'mailto:' + email.email")
              font-awesome-icon(:icon="['fa', 'envelope']")
              span {{ email.title.length >= 25 ? ' ' + email.title.toLowerCase().substring(0, 25) + '...' : ' ' + email.title.toLowerCase() }}
      .col-md-3.col-sm-12
        h3.my-5.font-black.text-lg.mb-5 Síguenos en
        ul
          li.mb-1(
            v-for="(social, key) in $store.state.socialMedia",
            :key="key"
          )
            a.capitalize.link.primary-underline-h(:href="social.url")
              img(
                style="float: left; width: 20px; margin-right: 5px",
                :src="PUBLIC_ASSETS + 'images/social-media/' + social.icon",
                :alt="social.title"
              )
              | {{ ' ' + social.title }}

    .column.basis-full.flex.flex-col.text-center(style="font-size: 0.8em")
      p Desarrollado por&nbsp;
        a.link.primary-underline-h(
          href="https://appsgorilasonline.com/",
          target="_blank"
        ) Gorilas Online&nbsp;
        | | Todos los derechos reservados {{ DOMAIN }} &nbsp;
        router-link.capitalize.link.primary-underline-h(to="/privacy-policy") | Aviso de Privacidad &nbsp;
        router-link.capitalize.link.primary-underline-h(
          to="/terms-and-conditions"
        ) | Términos y Condiciones &nbsp;
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      DOMAIN: import.meta.env.VITE_DOMAIN,
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
  mounted() {
    this.$store.dispatch("loadPhones");
    this.$store.dispatch("loadEmails");
    this.$store.dispatch("loadSocialMedia");
  },
};
</script>

<style scoped>
footer {
  background-color: #222;
  color: white;
}

.column {
  /* border: 1px solid white; */
  height: 100%;
}

.link {
  color: #ccc;
  position: relative;
  transition: color 0.35s ease;
}
</style>
