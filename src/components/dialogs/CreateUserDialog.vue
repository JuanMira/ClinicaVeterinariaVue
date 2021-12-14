<template>
  <h1>Create user</h1>
</template>

<script>
import CREATE_USER from "../../graphql/CreateUser.gql";
export default {
  name: "create-user",
  props: {
    closeDialog: Function,
  },
  data() {
    return {
      close: this.closeDialog,
    };
  },
  methods: {
    async createUser() {
      this.$apollo.mutate({
        mutation: CREATE_USER,
        variables: {
          userInput: {
            username: "",
            nombres: null,
            apellidos: null,
            especialidad: null,
            email: null,
            telefono: null,
            password: null,
          },
        },
      });
    },
  },
};
</script>
