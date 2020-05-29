<template>
  <v-container v-if="data">
    <v-btn to="/">
      Back
    </v-btn>
    <h1 class="mb-4 d-flex align-center">
      {{ data.Country }} <Flag class="ml-4" :code="data.CountryCode" :size="48" />
    </h1>
    <InfoCountry :country="data"/>
  </v-container>

</template>
<script>
  import InfoCountry from "../components/InfoCountry";
  import Flag from "../components/Flag";
  export default {
    name: "Country",
    components: {Flag, InfoCountry},
    computed: {
      data() {
        return this.$store.getters.COUNTRY(this.$route.params.id);
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
