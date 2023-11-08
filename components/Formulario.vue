<template>
  <v-card class="pa-5">
    <h1>Formulario</h1>
    <v-alert type="success" v-if="valido">El mensaje ha sido enviado</v-alert>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nombre *"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo *"
        required
      ></v-text-field>

      <v-text-field
        v-model="rut"
        label="Rut"
      ></v-text-field>

      <v-text-field
        v-model="celular"
        label="Celular"
      ></v-text-field>

      <v-text-field
        v-model="asunto"
        label="Asunto"
      ></v-text-field>

      <v-textarea
        v-model="mensaje"
        label="Escriba su mensaje"
        required
      ></v-textarea>

      <v-btn
        :disabled="!valid"
        color="red darken-1"
        class="mr-4 white--text"
        @click="validate"
      >
        Enviar
      </v-btn>

      <v-btn
        color="yellow"
        class="mr-4"
        @click="reset"
      >
        Limpiar
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    valido: false,
    rut: '',
    name: '',
    celular: '',
    asunto: '',
    mensaje: '',
    nameRules: [
      v => !!v || 'Su Nombre es requerido',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Su correo es requerido',
      v => /.+@.+\..+/.test(v) || 'Debe ser un correo válido',
    ],
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formSubmit();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    async formSubmit() {
      await this.$axios
        .post("https://marsolpropiedades.cl/data/correo.php", {
          'nombre': this.name,
          'correo': this.email,
          'rut': this.rut,
          'celular': this.celular,
          'asunto': this.asunto,
          'mensaje': this.mensaje,
        }).then(response => {
          if (response.data.error) {
            console.log('error', response.data.error)
          } else {
            this.valido = true;
            this.reset();
          }
        }).catch(error => {
          console.log(error.response)
        });
    }
  },
}
</script>
