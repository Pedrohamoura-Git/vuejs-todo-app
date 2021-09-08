import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
    UncheckedItems: 0,
    currentFilter: 'all',
  },
  mutations: {
    addTodos(state, payload) {
        state.todos.push(payload)
      },
    removeTodos(state, index) {
        state.todos.splice(index, 1)
      },
    directlyMutateTodos(state, payload) {
      state.todos = payload
    },
    mutateUncheckedItems(state, payload) {
      state.UncheckedItems = payload
    },
    mutateCurrentFilter(state, payload) {
      state.currentFilter = payload
    }
  },
  actions: {

  },
  modules: {},
});
