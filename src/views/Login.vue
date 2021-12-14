<template>
  <v-layout
    class="align-center justify-center"
    style="height: 100vh"
    fill-height
  >
    <v-card min-width="500px" class="pa-4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-form>
              <v-text-field
                outlined
                label="Nombre de usuario"
                v-model="credentials.username"
              ></v-text-field>
              <v-text-field
                outlined
                label="Contraseña"
                type="password"
                v-model="credentials.password"
              ></v-text-field>

              <v-btn block color="primary" @click="login">
                Iniciar sesion
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import LOGIN from "../graphql/Auth.gql";
export default {
  name: "login",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$apollo
        .mutate({
          mutation: LOGIN,
          variables: {
            credentials: this.credentials,
          },
        })
        .then((data) => {
          const { access, refresh } = data.data.logIn;
          this.$store.commit("login", { access, refresh });
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
