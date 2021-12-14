<template>
  <v-card class="pa-4">
    <h1>Hello world</h1>
    <v-divider />
    <v-dialog v-model="dialogCreate" persistent max-width="600px">
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
          Agregar nueva mascota
        </v-btn>
      </template>
    </v-dialog>
  </v-card>
</template>

<script>
import CreateDialog from "../dialogs/CreateDialog.vue";
export default {
  name: "create-pet",
  components: {
    CreateDialog,
  },
  data() {
    return {
      dialogCreate: false,
    };
  },
  methods: {
    openDialog() {
      this.dialogCreate = true;
    },
    closeDialog() {
      this.dialogCreate = false;
    },
  },
};
</script>
