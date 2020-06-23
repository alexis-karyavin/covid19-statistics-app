<template>
  <div>
    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Covid-19 Statistics </v-toolbar-title><img src="../assets/virus.png" class="virus-img">
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-text-field
          label="Search"
          v-model="filter"
          class="ml-4 mr-4 mt-2"
      ></v-text-field>
      <v-list dense>
<!--        <v-list-item :to="'/favorites/'">-->
<!--          <v-list-item-action>-->
<!--            <v-icon>mdi-star</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Favorites Country</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
        <v-list-item v-for="country in countries" :key="country.id" :to="'/country/' + country.id">
          <v-list-item-action>
            <Flag :code="country.id" :size="32" />
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
  import Flag from "./Flag";
  export default {
    name: "Header",
    components: {Flag},
    data: () => ({
      drawer: false,
      filter: ''
    }),
    computed: {
      countries() {
        return this.$store.getters.LIST_COUNTRIES.filter(item => {
          return item.name.toUpperCase().indexOf(this.filter.toUpperCase()) > -1
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .virus-img {
    width: 30px;
    margin-left: .5rem;
  }
</style>
