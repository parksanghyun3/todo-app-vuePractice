<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="fa-solid fa-xmark closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        무언가를 입력해주세요
      </div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "../components/common/AlertModal.vue"

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo(){
      if(this.newTodoItem !== "") { //여기서 조건문이 들어가야 input눌렀을 때 공백이 안생김
        this.$emit("addItems", this.newTodoItem);
        this.newTodoItem = "";
      } else {
        this.showModal = true;
      }
    }
  },
  components: {
    AlertModal: AlertModal
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