<template>
  <div v-on:click="clearTodo">clear all</div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      this.$emit("clearAll")
    }
  }
}
</script>

<style>

</style>