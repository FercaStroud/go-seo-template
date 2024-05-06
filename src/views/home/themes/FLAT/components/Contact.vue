<template lang="pug">
.container-fluid.my-5(data-aos="fade-down")
  .row
    .col-md-3.offset-2
      img(
        style="max-width:100%"
        :src="'/enmCONTACTO.png'",
      )

    .col-md-4.offset-1(style="padding-bottom:30px")
      form.form.row(
        class="sm:basis-1/2",
        @submit.prevent="onSubmit"
      )
        .col-md-2.my-1
          label.w-32(for="name") Nombre
            span.required *
        .col-md-10.my-1
          input#name.form-input.w-100(
            class="sm:ml-5",
            type="text",
            name="name",
            placeholder="Nombre completo",
            v-model="form.name",
            required
          )

        .col-md-2.my-1
          label.w-32(for="email") Correo
            span.required *
        .col-md-10.my-1
          input#email.form-input.w-100(
            class="sm:ml-5",
            type="email",
            name="email",
            placeholder="Correo Electrónico",
            v-model="form.email",
            required
          )

        .col-md-2.my-1
          label.w-32(for="subject") Teléfono
            span.required *
        .col-md-10.my-1
          input#subject.form-input.w-100(
            type="number",
            name="name",
            placeholder="Teléfono",
            v-model="form.phone",
            required
          )

        .col-md-2.my-1
          label.w-32(for="message") Mensaje
            span.required *
        .col-md-10.my-1
          textarea#message.form-input.w-100(
            name="message",
            placeholder="Mensaje",
            v-model="form.message",
            required
          )
        button.submit.primary-button.text-lg(type="submit") Enviar
        //img(style="margin:10%" src="https://appsgorilasonline.com/dona.png")
    .col-md-12.fx-contact(style="background:url('/enmFONDOPARAMAPA.png');background-size:cover")
      Map(style="margin-top: 80px")
</template>

<script>
import Map from "../../../../../components/maps/Map.vue";
export default {
  name: "Contact",
  mounted() {
    this.$store.dispatch('loadPhones').then(function (){
      AOS.init();
    });
    this.$store.dispatch('loadEmails').then(function (){
      AOS.init();
    });
  },
  components: { Map },
  data() {
    return {
      loading: false,
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true;

        const currentDate = new Date();

        this.form.currentDate = currentDate.toLocaleDateString('es-MX', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        const lurl = window.location.href;
        const urlParams = new URLSearchParams(lurl.split('?')[1]);

        for (const [key, value] of urlParams) {
          this.form[key] = value;
        }

        const url = 'https://hooks.zapier.com/hooks/catch/5727933/37vb2rb/';
        const queryParams = new URLSearchParams(this.form);

        const requestUrl = `${url}?${queryParams}`;

        await fetch(requestUrl);
        this.loading = false;
        alert("Mensaje enviado.");

      } catch (error) {
        this.loading = false;
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../styles/quill-core.css";

.form {
  .form-input {
    border: 1px solid #ccc;
    height: 3rem;
    // width: 18rem;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
  .submit {
    padding: 0.2rem 2rem;
    border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
}

@media(max-width: 991px){
  .fx-contact{
    background-position-y: -140px !important;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
  }
}
</style>
