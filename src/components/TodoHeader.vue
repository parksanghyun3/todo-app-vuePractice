<template>
  <div>
    <!-- <h1>Todo It!</h1> -->
    <h1>{{ this.$store.state.headerText }}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  h1 {color : #fff; font-weight : 900; margin : 2.5rem 0 1.5rem;}
</style>