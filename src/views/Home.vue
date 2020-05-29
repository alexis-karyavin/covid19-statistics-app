<template>
  <v-container>
    <h1 class="mb-4 d-flex align-center">
      All statistics
    </h1>
    <InfoCountry :country="data"/>
<!--    <router-link tag="v-btn" color="primary" > Afganistan </router-link>-->
    <v-btn color="primary" to="/country/AF">Primary</v-btn>
  </v-container>
</template>

<script>

import InfoCountry from "../components/InfoCountry";
export default {
  name: 'Home',
  components: {
    InfoCountry

  },
  computed: {
    data() {
      return this.$store.getters.GLOBAL;
    }
  }
}
</script>
