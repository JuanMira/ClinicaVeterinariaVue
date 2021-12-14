<template>
  <v-card>
    <v-layout class="pa-4">
      <v-row class="pa-4">
        <v-col cols="6">
          <v-text-field
            outlined
            label="Nombre de usuario"
            v-model="userInput.username"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            label="Nombre"
            v-model="userInput.nombres"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined label="Apellido" v-model="userInput.apellidos">
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            label="Especialidad"
            v-model="userInput.especialidad"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined label="Email" v-model="userInput.email">
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            label="Telefono"
            v-model="userInput.telefono"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            label="Contraseña"
            type="password"
            v-model="userInput.password"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            label="Repetir Contraseña"
            type="password"
            v-model="repeatPassword"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-btn @click="close" color="secondary" plain block>cerrar</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn color="primary" block @click="createUser">
            Crear usuario</v-btn
          >
        </v-col>
      </v-row>
    </v-layout>
  </v-card>
</template>

<script>
import CREATE_USER from "../../graphql/CreateUser.gql";
export default {
  name: "create-dialog",
  props: {
    closeDialog: Function,
  },
  data() {
    return {
      close: this.closeDialog,
      userInput: {
        username: "",
        nombres: null,
        apellidos: null,
        especialidad: null,
        email: null,
        telefono: null,
        password: null,
      },
      repeatPassword: "",
    };
  },
  methods: {
    async createUser() {
      if (this.repeatPassword == this.userInput.password) {
        this.$apollo
          .mutate({
            mutation: CREATE_USER,
            variables: {
              userInput: this.userInput,
            },
          })
          .then((result) => {
            this.closeDialog();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("contraseñas deben coincidir");
      }
    },
  },
};
</script>
