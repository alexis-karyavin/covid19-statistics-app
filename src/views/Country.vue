<template>
  <v-container>
    <h1 class="mb-4">{{ data.Country }}</h1>
    <v-card
        class="mx-auto"
        max-width="400"
    >
      <v-card-text class="text--primary">
        <v-row>
          <v-col cols="12" sm="6">
            <p>Confirmed</p>
            <div>
              {{data.TotalConfirmed}} <span>+{{ data.NewConfirmed }}</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <p>Recovered</p>
            {{data.TotalRecovered}} <span>+{{ data.NewRecovered }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <p>Deaths</p>
            <div>
              {{data.TotalDeaths}} <span>+{{ data.NewDeaths }}</span>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <p>In Active Fase</p>
            {{data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths}}
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
