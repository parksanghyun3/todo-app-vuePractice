<template>
  <div>
    <transition-group tag="ul" name="list">
      <!-- v-for는 각 아이템에 내부적으로 index를 부여한다. -->
      <!-- 해당 아이템을 클릭 했을 때, index 인자값을 removeTodo 메서드에 연결한다. -->
      <li v-for="(todoItem, index) in this.storedNowItems" :key = "todoItem.items">
        <i class="fa-solid fa-check checkBtn" :class="{checkBtnCompleted: todoItem.checked, checkBtnUnCompleted: todoItem.checked}" @click="toggleComplete(todoItem)"></i>
        <span :class="{checkBtnCompleted: todoItem.checked}">
          {{ todoItem.items }}
        </span>
        <i class="fa-solid fa-trash-can removeBtn" @click="removeTodo(todoItem, index)"></i>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

/* eslint-disable */
export default {
  // props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index){
      let store = this.$store;
      // this.$emit("removeItems", todoItem, index);
      store.commit("todoRemove", {todoItem, index});
    },
    toggleComplete(todoItem){
      // this.$emit("checkedevent", todoItem);
      this.$store.commit("toggleCheck", todoItem);
    }
  },
  computed: {
    // nowItems() {
    //   return this.$store.getters.storedNowItems;
    // }
    // ...mapState([""])
    ...mapGetters(["storedNowItems"]),
    // ...mapGetters({
    //    nowItems : "storedNowItems"
    //   }) 
    // 객체로 사용할 때는 getters 에서 사용하는 이름과 컴포넌트에서 사용하는 이름이 다를때 객체로 사용
  }
}
</script>

<style scoped>
  ul {list-style-type: none; padding-left: 0px; margin-top: 0; text-align: left;}
  li {display: flex; align-items: center; min-height: 50px; height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; background: #fff; border-radius: 5px;}
  li span {width: 100%;}
  .checkBtn {color: #62acde; margin-right: 5px; cursor: pointer;}
  .removeBtn {text-align: right; color : #de4343; cursor: pointer;}
  .checkBtnCompleted {color : #b3adad; transition: all .5s;}
  .checkBtnUnCompleted {color : #b3adad; transition: all .5s;}
  .textCompleted {color: #b3adad;}
  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {transition: all 1s;}
  .list-enter, .list-leave-to {opacity: 0; transform: translateY(30px);}
</style>