<template>
  <v-app>
    <drawer v-if="$store.state.isAuthenticated" />
    <app-bar v-if="$store.state.isAuthenticated" />

    <v-main>
      <v-layout fill-heigth>
        <router-view />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/generalComponents/AppBar.vue";
import Drawer from "./components/generalComponents/Drawer.vue";
export default {
  components: {
    AppBar,
    Drawer,
  },
  name: "App",

  data: () => ({
    //
  }),
  created() {
    this.$store.commit("initializeStore");
  },
};
</script>
