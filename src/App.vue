<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data(){
    return {
      nowItems: []
    }
  },
  methods: {
    // localValue(addItem){
    //   const obj = {checked: false, items: addItem}
    //   localStorage.setItem(addItem, JSON.stringify(obj));
    //   this.nowItems.push(obj)
    // },
    // todoRemove(rmItem, index){
    //   localStorage.removeItem(rmItem.items);
    //   this.nowItems.splice(index, 1);
    // },
    // toggleCheck(toggleItem){
    //   toggleItem.checked = !toggleItem.checked;
    //   localStorage.removeItem(toggleItem);
    //   localStorage.setItem(toggleItem.items, JSON.stringify(toggleItem));
    // },
    // clearAllItem(){
    //   localStorage.clear();
    //   this.nowItems = [];
    // }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  body {width: 300px; margin: 0 auto; text-align: center; background: linear-gradient(to right, #6478FB, #8763FB)}
  input {border-style : groove; width: 200px; border: 0;}
  button {border-style : groove;}
  .shadow {box-shadow: 5px 10px 10px rgba(0,0,0,0.03);}
</style>
