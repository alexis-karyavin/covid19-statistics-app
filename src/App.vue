<template>
  <v-app id="inspire">
    <Header/>
    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header},
  mounted() {
    this.$store.dispatch('GET_DATA');
  }
};
</script>
