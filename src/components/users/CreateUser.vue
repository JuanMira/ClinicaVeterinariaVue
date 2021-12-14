<template>
  <v-card class="pa-4">
    <h1>Hello world</h1>
    <v-divider />
    <v-dialog max-width="600px" v-model="open" persistent>
      <create-dialog :closeDialog="closeDialog" />
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="pa-4 mt-4"
          large
          color="secondary"
          v-on="on"
          v-bind="attrs"
          @click="openDialog"
        >
          Agregar nuevo usuario
        </v-btn>
      </template>
    </v-dialog>
  </v-card>
</template>

<script>
import CreateDialog from "../dialogs/CreateDialog.vue";
import CreteUserDialog from "../dialogs/CreateUserDialog.vue";
export default {
  components: {
    CreteUserDialog,
    CreateDialog,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    closeDialog() {
      this.open = false;
    },
    openDialog() {
      this.open = true;
    },
  },
};
</script>
