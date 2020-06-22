<template>
  <v-container v-if="data">
    <v-btn to="/" @click="clickBtnBack">
      Back
    </v-btn>
    <h2 class="mb-4 d-flex align-center">
      {{ data.Country }} <Flag class="ml-4" :code="data.CountryCode" :size="48" />
    </h2>
    <InfoCountry :country="data"/>
    <h3>Confirmed vs Recovered chart</h3>
    <Chart ref="chart" options="" :data="statistics" />
  </v-container>

</template>
<script>
  import InfoCountry from "../components/InfoCountry";
  import Flag from "../components/Flag";
  import Chart from "../components/Chart";
  export default {
    name: "Country",
    components: {Chart, Flag, InfoCountry},
    watch: {
      $route(from, to) {
        this.$store.dispatch('GET_STATISTIC_BEFORE', this.data.Slug);
      }
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      data() {
        return this.$store.getters.COUNTRY(this.$route.params.id);
      },
      statistics() {
        return this.$store.getters.GET_STATISTICS;
      }
    },
    mounted() {
      this.$store.dispatch('GET_STATISTIC_BEFORE', this.data.Slug);
    },
    updated() {
      this.$refs.chart.update();
    },
    methods: {
      clickBtnBack() {
        this.$destroy();
      }
    }
  }
</script>
<style scoped lang="scss">
  h2, h3 {
    margin: 1rem 0;
  }
</style>
