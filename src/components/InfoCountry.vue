<template>
  <v-card
      class="mx-auto d-flex justify-center align-center"
      max-width="400"
      min-height="273"
  >
    <MoonLoader v-if="load" :color="'#607D8B'"></MoonLoader>
    <v-card-text v-else class="text--primary">
      <v-row>
        <v-col cols="12" sm="6">
          <b>Confirmed:</b> <span class="title-number">{{ confirmed }}</span>
          <v-chip
              class="ma-2"
              color="primary"
              text-color="white"
              small
          >
            +{{ newConfirmed }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6">
          <b>Recovered:</b> <span class="title-number"> {{ recovered }} </span>
          <v-chip
              class="ma-2"
              color="green"
              text-color="white"
              small
          >
            +{{ newRecovered }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <b>Deaths:</b>  <span class="title-number">{{ deaths }} </span>
          <v-chip
              class="ma-2"
              color="red"
              text-color="white"
              small
          >
            +{{ newDeaths }}
          </v-chip>
        </v-col>
        <v-col cols="12" sm="6">
          <b>Active:</b> <span class="title-number">{{ active }}</span>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
  import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
  import { formattingNumber } from '../libs/libs';

  export default {
    name: "InfoCountry",
    components: {
      MoonLoader
    },
    props: ['country'],
    data() {
      return {
        load: true
      }
    },
    computed: {
      confirmed: vm => formattingNumber(vm.country.TotalConfirmed),
      deaths: vm => formattingNumber(vm.country.TotalDeaths),
      recovered: vm => formattingNumber(vm.country.TotalRecovered),
      active: vm => formattingNumber(vm.country.TotalConfirmed - vm.country.TotalRecovered - vm.country.TotalDeaths),
      newConfirmed: vm => formattingNumber(vm.country.NewConfirmed),
      newRecovered: vm => formattingNumber(vm.country.NewRecovered),
      newDeaths: vm => formattingNumber(vm.country.NewDeaths),
    },
    watch: {
      country() {
        this.load = false
      }
    },
    mounted() {
      if(Object.keys(this.country).length) {
        this.load = false;
      }
    },
    
  }
</script>

<style scoped lang="scss">
  .title-number {
    font-size: 1.4rem;
  }
</style>
