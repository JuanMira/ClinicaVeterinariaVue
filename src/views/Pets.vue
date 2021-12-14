<template>
  <v-layout class="pa-4">
    <v-row align="start">
      <v-col cols="12">
        <create-pet />
      </v-col>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="data" class="pa-4">
          <template v-slot:top>
            <v-text-field
              class="pa-4"
              placeholder="Buscar (solo palabras en minuscula)"
              prepend-icon="mdi-cloud-search"
            ></v-text-field>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <EditDialog
                :dialog="dialog"
                :closeDialog="closeEditItem"
                :item="editedItem"
              />
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-dialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import EditDialog from "../components/dialogs/EditDialog.vue";
import CreatePet from "../components/Pets/CreatePet.vue";
export default {
  components: {
    EditDialog,
    CreatePet,
  },
  name: "pets",
  data() {
    return {
      data: [],
      dialog: false,
      dialogDelete: false,
      editedItem: {},
      defaultItem: {
        id: 0,
        name: "",
        situacion: "",
      },
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        {
          text: "Nombre",
          align: "center",
          value: "name",
          filter: (value) => {
            if (!this.name) return true;

            return value < parseInt(this.name);
          },
        },
        {
          text: "Status",
          align: "start",
          value: "status",
          align: "center",
        },
        {
          text: "Actions",
          value: "actions",
          align: "center",
        },
      ];
    },
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.data = [
        {
          id: 1,
          name: "Max",
          status: "Adoptado",
        },
        {
          id: 2,
          name: "Perro",
          status: "No adoptado",
        },
      ];
    },

    editItem(item) {
      this.$store.commit("setEditItem", item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.dialogDelete = true;
    },
    closeEditItem() {
      this.dialog = false;
      this.$store.commit("setDefaultItem");
    },
  },
};
</script>
