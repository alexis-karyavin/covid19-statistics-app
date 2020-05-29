<template>
  <v-container>
    <h1>Home</h1>
<!--    <router-link tag="v-btn" color="primary" > Afganistan </router-link>-->
    <v-btn color="primary" to="/country/AF">Primary</v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  computed: {
    data() {
      return this.$store.getters.GLOBAL;
    }
  }
}
</script>
