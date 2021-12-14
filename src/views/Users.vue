<template>
  <v-layout class="pa-4">
    <v-row align="start">
      <v-col cols="12">
        <create-user />
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import CreateUser from "../components/users/CreateUser.vue";
export default {
  name: "user",
  components: {
    CreateUser,
  },
};
</script>
