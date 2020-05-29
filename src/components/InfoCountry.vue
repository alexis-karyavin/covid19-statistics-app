<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-card-text class="text--primary">
      <v-row>
        <v-col cols="12" sm="6">
          Confirmed: {{country.TotalConfirmed}} <span>+{{ country.NewConfirmed }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          Recovered: {{country.TotalRecovered}} <span>+{{ country.NewRecovered }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          Deaths: {{country.TotalDeaths}} <span>+{{ country.NewDeaths }}</span>
        </v-col>
        <v-col cols="12" sm="6">
          Active: {{country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths}}
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
    name: "InfoCountry",
    props: ['country']
  }
</script>

<style scoped>

</style>
