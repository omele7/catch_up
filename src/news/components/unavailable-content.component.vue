<script>
export default {
  name: "unavailable-content",
  props:{ errors: null}
}

</script>

<!-- $t es el metodo de traduccion para Vue -->
<template>
  <div><h4>{{$t('unavailable-news')}}</h4></div>
  <div v-for = "error in errors" :key = "error">
    <h6>{{error}}</h6>
  </div>
</template>

<style scoped>

</style>