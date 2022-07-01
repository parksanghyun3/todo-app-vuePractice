<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo(){
      this.$emit("addItems", this.newTodoItem);
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
  input:focus {outline: none;}
  .inputBox {background: rgba(255, 255, 255, .3); display: flex; height: 50px; line-height: 50px; border-radius: 5px; box-shadow: 10px 10px 10px rgba(0, 0, 0, .3);}
  .inputBox input {padding-left: 10px; background-color: rgba(255, 255, 255, 1); width: calc(100% - 50px); border-style: none; border: 0; font-size: 0.9rem; color: #000;}
  .addContainer {float: right; background: #fff; display: block; width: 50px; height: 100%; border-radius: 0 5px 5px 0; cursor: pointer;}
  i {color: #000;}
  .addBtn {cursor: pointer; color: #000; vertical-align: middle;}
  .closeModalBtn {color: #42b983;}
</style>