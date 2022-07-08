<template lang="pug">
.content.container.mx-auto.flex.flex-col.items-center.my-5
  .title-primary.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) Contáctanos

  .contact-container.container.flex.flex-wrap
    .flex.flex-col.basis-full.p-5(class="sm:basis-1/2")
      p.mb-5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem veritatis totam animi nam, vero obcaecati, voluptatibus veniam facilis laboriosam provident ea! At dignissimos id officiis officia molestias nulla quos, quaerat iure minima hic ut eum corporis quod necessitatibus reprehenderit, blanditiis ducimus magnam beatae, ad delectus tempore laboriosam eos! Maxime.

      .flex.flex-col.justify-between.align-center(class="sm:flex-row")
        .flex.flex-col.mb-5(class="sm:mb-0")
          h3.title-primary.uppercase.font-black.text-lg.mb-5 Llamanos
          ul
            li.mb-1(v-for="(phone, key) in $store.state.phones" :key="key")
              a.capitalize.primary-underline-h(:href="'tel:' + phone.phone")
                font-awesome-icon(:icon="['fa', 'phone']")
                | {{' ' + phone.title }}
        .flex.flex-col
          h3.title-primary.uppercase.font-black.text-lg.mb-5 Dudas y aclaraciones
          ul
            li.mb-1(v-for="(email, key) in $store.state.emails" :key="key")
              a.capitalize.primary-underline-h(:href="'mailto:' + email.email")
                font-awesome-icon(:icon="['fa', 'envelope']")
                | {{' ' + email.title }}


    form.form.basis-full.flex.flex-col.gap-5.p-5(
      class="sm:basis-1/2",
      @submit.prevent="onSubmit"
    )
      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 md:items-center")
        label.w-32(for="name") Nombre
          span.required *
        input#name.form-input.basis-full.ml-0(
          class="sm:ml-5",
          type="text",
          name="name",
          placeholder="Nombre completo",
          v-model="name",
          required
        )

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 md:items-center")
        label.w-32(for="email") Correo
          span.required *
        input#email.form-input.basis-full.ml-0(
          class="sm:ml-5",
          type="email",
          name="email",
          placeholder="Correo Electrónico",
          v-model="email",
          required
        )

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 md:items-center")
        label.w-32(for="subject") Asunto
          span.required *
        input#subject.form-input.basis-full.ml-0(
          class="sm:ml-5",
          type="text",
          name="name",
          placeholder="Nombre completo",
          v-model="name",
          required
        )
      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 md:items-center")
        label.w-32(for="message") Mensaje
          span.required *
        textarea#message.form-input.basis-full.ml-0(
          class="sm:ml-5",
          name="message",
          placeholder="Mensaje",
          v-model="name",
          required
        )
      button.submit.primary-button.text-lg(type="submit") Enviar

  Map(style="margin-top: 30px")
</template>

<script>
import Map from "../../components/maps/Map.vue";
export default {
  name: "FlatContact",
  mounted() {
    this.$store.dispatch('loadPhones');
    this.$store.dispatch('loadEmails');
  },
  components: { Map },
  data() {
    return {
      name: "",
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
.content {
  margin-top: 4.5rem;
  transition: all 0.35s ease;
}
@media screen and (max-width: 639px) {
  .content {
    margin-top: 7.5rem;
  }
}

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
