<template>
  <div>
    <ul>
      <!-- v-for는 각 아이템에 내부적으로 index를 부여한다. -->
      <!-- 해당 아이템을 클릭 했을 때, index 인자값을 removeTodo 메서드에 연결한다. -->
      <li v-for="(todoItem, index) in items" :key = "todoItem.item">
        <i class="fa-solid fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{checkBtnCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <i class="fa-solid fa-trash-can removeBtn" @click="removeTodo(todoItem, index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    // length의 값은 왜 구하는 건지??
    if (localStorage.length > 0) {
      for(var i = 0; i< localStorage.length; i++){
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          localStorage.getItem(localStorage.key(i));
          //로컬 스토리지의 getItem() 메서드는 keyName을 인자로 keyValue를 리턴해 준다.
          this.items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      //localStorage에서 removeItem을 이용하여 todoItems의 값을 제거
      localStorage.removeItem(todoItem.item);
      this.items.splice(index, 1)
    },
    toggleComplete(todoItem){
      // todoItem이 todoInput에서 false로 값이 할당이 되어있을때, 토글로 왔다갔다하게끔 false
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },

}
</script>

<style scoped>
  ul {list-style-type: none; padding-left: 0px; margin-top: 0; text-align: left;}
  li {display: flex; align-items: center; min-height: 50px; height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; background: #fff; border-radius: 5px;}
  li span {width: 100%;}
  .checkBtn {color: #62acde; margin-right: 5px; cursor: pointer;}
  .removeBtn {text-align: right; color : #de4343; cursor: pointer;}
  .checkBtnCompleted {color : #b3adad;}
  .textCompleted {color: #b3adad;}
  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {transition: all 1s;}
  .list-enter, list-leave-to {opacity: 0; transform: translateY(30px);}
</style>