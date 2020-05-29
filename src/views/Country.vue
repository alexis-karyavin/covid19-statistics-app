<template>
  <v-container v-if="data">
    <v-btn to="/">
      Back
    </v-btn>
    <h1 class="mb-4 d-flex align-center">
      {{ data.Country }} <img class="ml-4" :src="`https://www.countryflags.io/${data.CountryCode}/shiny/48.png`">
    </h1>
    <InfoCountry :country="data"/>
  </v-container>

</template>
<script>
  import InfoCountry from "../components/InfoCountry";
  export default {
    name: "Country",
    components: {InfoCountry},
    computed: {
      data() {
        return this.$store.getters.COUNTRY(this.$route.params.id);
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
