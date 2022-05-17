<template lang="pug">
footer.flex.flex-col.flex-wrap.p-5.justify-center.items-start(class='sm:flex-row sm:px-10')
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.uppercase.font-black.text-lg.mb-5(class='title-p`rimary')
        | SITE MAP
      ul
        li.mb-1
          router-link.capitalize.link(to='/portfolio')
            | Portafolio
        li.mb-1
          router-link.capitalize.link(to='/contact')
            | Contacto
        li.mb-1
          router-link.capitalize.link(to='/contact')
            | Blog
        li.mb-1
          router-link.capitalize.link(to='/contact')
            | Servicios
        li.mb-1
          router-link.capitalize.link(to='/contact')
            | Productos
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5
        | LLamanos
      ul
        li.mb-1(v-for="(phone, key) in $store.state.phones" :key="key")
          a.capitalize.link(:href="'tel:' + phone.phone")
            font-awesome-icon(:icon="['fa', 'phone']")
            | {{' ' + phone.title }}
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5 Dudas y aclaraciones
      ul
        li.mb-1(v-for="(email, key) in $store.state.emails" :key="key")
          a.capitalize.link(:href="'mailto:' + email.email")
            font-awesome-icon(:icon="['fa', 'envelope']")
            | {{' ' + email.title }}
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5 Síguenos en
      ul
        li.mb-1(v-for="(social, key) in $store.state.socialMedia" :key="key")
          a.capitalize.link(:href='social.url')
            img(
              style="float:left;width:20px; margin-right:5px"
              :src='PUBLIC_ASSETS + "images/social-media/" + social.icon'
              :alt='social.title'
            )
            | {{' ' + social.title }}
  .column.basis-full.flex.flex-col.text-center(style="font-size:.8em")
    p Desarrollado por&nbsp;
      a.link(href="https://appsgorilasonline.com/" target="_blank") Gorilas Online&nbsp;
      | | Todos los derechos reservados {{DOMAIN}}  &nbsp;
      router-link.capitalize.link(to='/privacy-policy') | Aviso de Privacidad &nbsp;
      router-link.capitalize.link(to='/terms-and-conditions') | Términos y Condiciones &nbsp;

</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      DOMAIN: import.meta.env.VITE_DOMAIN,
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS
    }
  },
  mounted() {
    this.$store.dispatch('loadPhones');
    this.$store.dispatch('loadEmails');
    this.$store.dispatch('loadSocialMedia');
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

.link:hover {
  color: white;
}

.link::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -2px;
  height: 2px;
  border-radius: 1rem;
  width: 0;
  background-color: #d30000;
  transition: width 0.35s ease;
}

.link:hover::after {
  width: 100%;
}
</style>
