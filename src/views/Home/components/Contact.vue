<template lang="pug">
.container.mx-auto.flex.flex-col.items-center.my-5
  h1.title-primary.text-center.font-black.text-xl.mb-5(class="sm:text-2xl") Contacta con nosotros!
  .mb-5
    //- .ql-editor(v-html="description" )

  .form-container.flex.flex-row.flex-wrap.justify-center.items-center.gap-10.px-10(
    class="sm:gap-0"
  )
    .map-container.flex.justify-center.items-center(class="basis-1/2")
      Map

    form.form.flex.flex-col.justify-center.items-center.gap-5(
      class="basis-1/2 sm:items-start",
      @submit.prevent="onSubmit"
    )
      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
        label.w-20(for="name") Nombre
          span.required *
        input#name.form-input.ml-0(
          class="sm:ml-5",
          type="text",
          name="name",
          placeholder="Nombre completo",
          v-model="name",
          required
        )

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
        label.w-20(for="email") Correo
          span.required *
        input#email.form-input.ml-0(
          class="sm:ml-5",
          type="email",
          name="email",
          placeholder="Correo Electrónico",
          v-model="email",
          required
        )

      .form-field.flex.flex-col.gap-5(class="sm:flex-row sm:gap-5 sm:items-center")
        label.w-20(for="budget") Presupuesto
          span.required *
        select#budget.form-input.ml-0(
          class="sm:ml-5",
          name="budget",
          v-model="selectedBudget",
          required
        )
          option(value="", disable) Seect one
          option $10,000 - $15,000
          option $15,000 - $20,000
          option $20,000+

      button.submit.text-lg(type="submit") Enviar
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
    width: 18rem;
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