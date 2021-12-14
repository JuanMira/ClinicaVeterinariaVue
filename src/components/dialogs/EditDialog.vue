<template>
  <v-card>
    <h1>Hello world</h1>
    <h4>{{ $store.state.editedItem.name }}</h4>

    <v-btn color="primary" @click="close">Cerrar</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "edit-dialog",
  props: {
    dialog: Boolean,
    closeDialog: Function,
  },
  data() {
    return {
      open: this.dialog,
      close: this.closeDialog,
    };
  },
};
</script>
