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
        <v-list-item @click.stop="">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>item testr</v-list-item-title>
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
  }
</script>

<style scoped>

</style>
