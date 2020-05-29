<template>
  <img :src="`https://www.countryflags.io/${code}/shiny/${size}.png`">
</template>

<script>
  export default {
    name: "Flag",
    props: [
      'code',
      'size'
    ]
  }
</script>

<style scoped>

</style>
