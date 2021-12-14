<template>
  <v-navigation-drawer permanent app>
    <v-list-item class="username">
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />

    <v-list>
      <v-list-item
        link
        v-for="item in drawers"
        :key="item.name"
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{ item.name }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block elevation="0" color="error" @click="logout"
          ><v-icon>mdi-power</v-icon> {{ "  " }}Cerrar sesion
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data: () => {
    return {
      drawers: [
        {
          name: "Inicio",
          icon: "mdi-home",
          path: "/",
        },
        {
          name: "Mascotas",
          icon: "mdi-dog",
          path: "/pets",
        },
        {
          name: "Usuarios",
          icon: "mdi-account",
          path: "/users",
        },
        {
          name: "Historial",
          icon: "mdi-folder-heart",
          path: "/historial",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.username {
  margin-top: -0.2rem;
}
</style>
