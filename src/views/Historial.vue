<template>
  <v-layout class="pa-2">
    <v-col cols="12">
      <v-card class="pa-4">
        <v-row>
          <v-col cols="11">
            <v-text-field
              placeholder="Busca cliente por cedula"
              class="pa-4"
            ></v-text-field>
          </v-col>
          <v-col cols="1" align-self="center">
            <v-btn large color="primary" fab dark>
              <v-icon>mdi-cloud-search</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>        
  </v-layout>
</template>

<script>
export default {
  name: "historial",
};
</script>
