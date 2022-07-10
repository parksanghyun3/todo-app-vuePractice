import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
// 뷰의 플러그인, 뷰를 사용할 때 전역으로 사용할 일이 있을 때 주로 사용함

//Todo.vue
//this.$store

const storage = {
  fetch(){
    const arr = [];
    for(let i = 0; i < localStorage.length; i++) {
    // const parsing = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // JSON.parse(localStorage.getItem(localStorage.key(i)));
     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    headerText: "Todo It!",
    nowItems: storage.fetch()
  }
});