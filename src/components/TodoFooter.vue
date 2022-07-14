<template>
  <div>
    <button v-on:click="clearTodo">clear all</button>
    <button v-on:click="checkedAll">checked all</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo(){
      // this.$emit("clearAll");
      this.$store.commit("clearAllItem");
    },
    checkedAll(){
      // this.$emit("clearAll");
      this.$store.commit("checkedAll");
    }
    
  }
}
</script>

<style scoped>
  button {padding: 10px 20px; margin-right: 20px; font-size: 1rem; border: none; border-radius: 3px;}
</style>