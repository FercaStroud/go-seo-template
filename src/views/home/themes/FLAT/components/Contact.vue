<template lang="pug">
.container-fluid.my-5(data-aos="fade-down")
  .row
    .col-md-6
      img(
        style="max-width:100%"
        :src="'/enmCONTACTO.png'",
      )

    .col-md-6
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
            v-model="name",
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
            v-model="email",
            required
          )

        .col-md-2.my-1
          label.w-32(for="subject") Asunto
            span.required *
        .col-md-10.my-1
          input#subject.form-input.w-100(
            type="text",
            name="name",
            placeholder="Asunto",
            v-model="subject",
            required
          )

        .col-md-2.my-1
          label.w-32(for="message") Mensaje
            span.required *
        .col-md-10.my-1
          textarea#message.form-input.w-100(
            name="message",
            placeholder="Mensaje",
            v-model="message",
            required
          )
        button.submit.primary-button.text-lg(type="submit") Enviar
        //img(style="margin:10%" src="https://appsgorilasonline.com/dona.png")
    .col-md-12(style="background:url('/enmFONDOPARAMAPA.png');background-size:100% 100%")
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
      name: "",
      subject: "",
      message: "",
      email: "",
      selectedBudget: "",
    };
  },
  methods: {
    onSubmit() {
      alert(
        `name: ${this.name}\nemail: ${this.email}\nselected: ${this.selectedBudget}`
      );
      this.name = "";
      this.email = "";
      this.selectedBudget = "";
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
</style>
