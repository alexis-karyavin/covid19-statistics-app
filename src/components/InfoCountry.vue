<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-card-text class="text--primary">
      <v-row>
        <v-col cols="12" sm="6">
          <b>Confirmed:</b> <span class="title-number">{{country.TotalConfirmed}}</span>
          <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              small
          >
            +{{ country.NewConfirmed }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6">
          <b>Recovered:</b> <span class="title-number"> {{country.TotalRecovered}} </span>
          <v-chip
              class="ma-2"
              color="green"
              text-color="white"
              small
          >
            +{{ country.NewRecovered }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <b>Deaths:</b>  <span class="title-number">{{country.TotalDeaths}} </span>
          <v-chip
              class="ma-2"
              color="red"
              text-color="white"
              small
          >
            +{{ country.NewDeaths }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6">
          <b>Active:</b> <span class="title-number">{{country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths}}</span>
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

<style scoped lang="scss">
  .title-number {
    font-size: 1.4rem;
  }
</style>
