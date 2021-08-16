import { createStore } from "vuex";


// Acrescentar transições
// [DESKTOP] - Mudar o display dos items para grid e utilizar melhor o espaço de tela

export default createStore({
  state: {
    // darkTheme: true,
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
  actions: {},
  modules: {},
});
