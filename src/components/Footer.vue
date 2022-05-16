<template lang="pug">
footer.flex.flex-col.flex-wrap.p-5.justify-center.items-start(class='sm:flex-row sm:px-10')
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.uppercase.font-black.text-lg.mb-5(class='title-p`rimary')
        | Conocenos
      ul
        li.mb-1
          router-link.capitalize.link(to='/portfolio')
            | Portafolio
        li.mb-1
          router-link.capitalize.link(to='/contact')
            | Contacto
        li.mb-1
          a.capitalize.link(href='https://enmedioasociados.com/')
            | Enmedio Asociados
        li.mb-1
          a.capitalize.link(href='http://appsgorilasonline.com/')
            | Gorilas Online
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5
        | LLamanos
      ul
        li.mb-1
          a.capitalize.link(href='tel:8711188750')
            font-awesome-icon(:icon="['fa', 'phone']")
            | (871) 118 8750
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5 Dudas y aclaraciones
      ul
        li.mb-1
          a.capitalize.link(href='mailto:infoexposystands@gmail.com')
            font-awesome-icon(:icon="['fa', 'envelope']")
            | infoexposystands@gmail.com
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5
        | doing business
      ul
        li.mb-1
          a.capitalize.link(href='#') become a partner
        li.mb-1
          a.capitalize.link(href='#') our clients
        li.mb-1
          a.capitalize.link(href='#') oportunities
  .column.basis-full.flex.flex-col.gap-10.mb-10(class='sm:basis-1/2 lg:basis-1/4')
    .list
      h3.title-primary.uppercase.font-black.text-lg.mb-5 follow us
      ul
        li.mb-1
          a.capitalize.link(href='#')
            font-awesome-icon(:icon="['fab', 'facebook']")
            | Facebook
        li.mb-1
          a.capitalize.link(href='#')
            font-awesome-icon(:icon="['fab', 'twitter']")
            | Twitter
        li.mb-1
          a.capitalize.link(href='#')
            font-awesome-icon(:icon="['fab', 'instagram']")
            | Instagram
        li.mb-1
          a.capitalize.link(href='#')
            font-awesome-icon(:icon="['fab', 'whatsapp']")
            | Whatsapp

</template>

<script>
export default {
  name: "Footer",
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
