<template>
  <v-container v-if="data">
    <v-btn to="/">
      Back
    </v-btn>
    <h1 class="mb-4">{{ data.Country }}</h1>
    <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-card-text class="text--primary">
        <v-row>
          <v-col cols="12" sm="6">
            Confirmed: {{data.TotalConfirmed}} <span>+{{ data.NewConfirmed }}</span>
          </v-col>
          <v-col cols="12" sm="6">
              Recovered: {{data.TotalRecovered}} <span>+{{ data.NewRecovered }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            Deaths: {{data.TotalDeaths}} <span>+{{ data.NewDeaths }}</span>
          </v-col>
          <v-col cols="12" sm="6">
            Active:{{data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths}}
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
  </v-container>

</template>
<script>
  export default {
    name: "Country",
    computed: {
      data() {
        return this.$store.getters.COUNTRY(this.$route.params.id);
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
