import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
// 뷰의 플러그인, 뷰를 사용할 때 전역으로 사용할 일이 있을 때 주로 사용함

//Todo.vue
//this.$store

const storage = {
  fetch(){
    const arr = [];
    for(var i = 0; i < localStorage.length; i++) {
    // const parsing = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // JSON.parse(localStorage.getItem(localStorage.key(i)));
     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return arr; // 로컬스토리지에 넣은 배열을 return arr 로 반환한다.
  },
};

export const store = new Vuex.Store({
  state: {
    headerText: "Todo It!",
    nowItems: storage.fetch()
  },
  getters: {
    storedNowItems(state) {
      return state.nowItems;
    }
  },
  // mutations 는 기본적인 매개변수로 state를 갖는다.
  // 인자값으로는 payload를 많이 사용한다.
  mutations: {
    localValue(state, payload){
      const obj = {checked: false, items: payload}
      localStorage.setItem(payload, JSON.stringify(obj));
      state.nowItems.push(obj)
    }, 
    todoRemove(state, payload){
      // const ob = JSON.parse(payload);
      // console.log(payload);
      localStorage.removeItem(payload.todoItem.items);
      state.nowItems.splice(payload.index, 1); //제거할 배열의 번호가 아닌 개수이다
    },
    toggleCheck(state, payload){
      payload.checked = !payload.checked;
      localStorage.removeItem(payload, payload.index);
      localStorage.setItem(payload.items, JSON.stringify(payload));
    },
    clearAllItem(state){
      localStorage.clear();
      state.nowItems = [];
    },
    checkedAll(state) {
      for(let i = 0; i < localStorage.length; i++) {
        state.nowItems[i].checked = !state.nowItems[i].checked;
        localStorage.removeItem(state.nowItems[i].items);
        localStorage.setItem(state.nowItems[i].items, JSON.stringify(state.nowItems[i]));
      }
    }
  }
});