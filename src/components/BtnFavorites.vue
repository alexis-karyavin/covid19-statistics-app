<template>
    <v-btn icon color="indigo">
      <v-icon>
        {{ (favorites) ? 'mdi-star' : 'mdi-star-outline' }}
      </v-icon>
    </v-btn>
</template>

<script>
  export default {
    name: "BtnFavorites",
    props: ['favorites']
  }
</script>

<style scoped>

</style>
