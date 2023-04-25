<template lang="pug">
.container.my-5(data-aos="fade-down")
  h1.text-center()  {{ $store.state.settings.contact_component_title }}

  .mb-5(v-html="$store.state.settings.contact_text")

  .row
    .col-md-4
      h4.my-2 Llamanos
      template(v-for="(phone, key) in $store.state.phones" :key="key")
        a.text-black.capitalize.primary-underline-h(:href="'tel:' + phone.phone" style="text-decoration:none")
          font-awesome-icon(:icon="['fa', 'phone']")
          | {{' ' + phone.title }}
        br/

      h3.my-2 Dudas y aclaraciones
      template(v-for="(email, key) in $store.state.emails" :key="key" )
        a.text-black.primary-underline-h(:href="'mailto:' + email.email" style="text-decoration:none")
          font-awesome-icon(:icon="['fa', 'envelope']")
          span {{ ' ' + email.title.toLowerCase() }}
        br/

    .col-md-8
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
    .col-md-12
      Map(style="margin-top: 30px")
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
      email: "",
      subject: "",
      message: "",
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
