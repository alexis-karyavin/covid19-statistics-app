<template>
  <div>
    <v-app-bar
        app
        clipped-right
        color="blue-grey"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Covid-19 Statistics</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-text-field
          label="Country"
      ></v-text-field>
      <v-list dense>
        <v-list-item v-for="country in countries" :key="country.id" :to="'/country/' + country.id">
          <v-list-item-action>
            <img :src="`https://www.countryflags.io/${country.id}/shiny/32.png`">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ country.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>


</template>

<script>
  export default {
    name: "Header",
    data: () => ({
      drawer: false,
      left: false,
    }),
    computed: {
      countries() {
        return this.$store.getters.LIST_COUNTRIES;
      }
    }
  }
</script>

<style scoped>

</style>
