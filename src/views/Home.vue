<template>
  <v-container>
    <h2 class="mb-4 d-flex align-center">
      All statistics
    </h2>
    <InfoCountry class="mb-6" :country="data"/>
    <h3>Top 10 Confirmed</h3>
    <v-data-table
        :headers="headers"
        :items="listCountries"
        :items-per-page="10"
        class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import InfoCountry from "../components/InfoCountry";
export default {
  name: 'Home',
  components: {
    InfoCountry
  },
  data() {
    return {
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'number',
        },
        {
          text: 'Country',
          sortable: false,
          value: 'country',
        },
        {
          text: 'Confirmed',
          sortable: false,
          value: 'confirmed',
        },
        {
          text: 'Recovered',
          sortable: false,
          value: 'recovered',
        },
        {
          text: 'Deaths',
          sortable: false,
          value: 'deaths',
        },
      ]
    }
  },
  computed: {
    data() {
      return this.$store.getters.GLOBAL;
    },
    listCountries() {
      return this.$store.getters.GET_TOP_COUNTRIES.map((item, i) => {
        return {
          number: i + 1,
          country: item.Country,
          confirmed: item.TotalConfirmed,
          recovered: item.TotalRecovered,
          deaths: item.TotalDeaths
        }
      });
    }
  }
}
</script>
