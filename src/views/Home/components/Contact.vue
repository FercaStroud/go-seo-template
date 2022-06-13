<template lang="pug">
.container.mx-auto.flex.flex-col.items-center.my-5
  .title-primary.text-center.font-black.text-2xl.mt-2.mb-5.p-2(
    class="sm:text-3xl sm:mt-5 sm:mb-10 sm:p-0"
  ) Contáctanos

  .form-container.flex.flex-row.flex-wrap.justify-center.items-stretch.gap-10.px-10(
    class="sm:gap-0"
  )
    form.form.flex.flex-col.justify-center.items-center.gap-5(
      class="basis-1/2 sm:items-stretch",
      @submit.prevent="onSubmit"
    )
      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
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

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
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

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
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
      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
        label.w-32(for="message") Mensaje
          span.required *
        textarea#message.form-input.basis-full.ml-0(
          class="sm:ml-5",
          name="message",
          placeholder="Mensaje",
          v-model="name",
          required
        )

      button.submit.text-lg(type="submit") Enviar
    Map(style="margin-top:30px")

</template>

<script>
import Map from "../../../components/Map.vue";
export default {
  name: "Contact",
  mounted() {},
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
}
</script>

<style lang="scss" scoped>
// @import "../../../styles/quill-core.css";
.form-container {
  width: 100%;

  .required {
    color: #d30000;
  }
  .form-input {
    border: 1px solid #ccc;
    height: 3rem;
    // width: 18rem;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
  }
  .submit {
    background-color: #d30000;
    color: white;
    padding: 0.2rem 2rem;
    border-radius: 0.2rem 0.5rem 0.2rem 0.5rem;
    transition: all 0.35s ease;
    &:hover {
      background-color: #ff1f75;
    }
  }
}
</style>
