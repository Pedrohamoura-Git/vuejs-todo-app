<template>
  <ul id="todo-list" v-if="todos.length !== 0">
    <li class="todo-item" v-for="(todo, index) in filteredTodos" :key="index">
      <button @click="checkTodo(index)" :class="(todo.checked ? 'checked' : 'check-border')">
        <svg v-if="todo.checked" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>
        </svg>
      </button>
      <span :class="todo.checked ? 'checked-text' : 'todo-text'">
        {{ todo.content }}
      </span>
      <button @click="removeItem(index, $event)" class="delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" alt="delete button">
          <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </button>
    </li>
    <OptionList />
  </ul>
</template>

<script>
import OptionList from './OptionsList.vue'
export default {
components: { OptionList,  }, 
data() {
  return {

  }
},
methods: {
  checkTodo(index) {
    this.todos[index].checked = !this.todos[index].checked
    if(this.todos[index].checked) {
      this.todos[index].filter = 'completed'
    } else {
      this.todos[index].filter = 'active'
    }
    console.log(this.todos[index].filter)
  },
  removeItem(index, event) {
    if(confirm("Are You Sure?")) {
      this.$store.commit('removeTodos', index)
      if(event.target.classList.contains('checked-btn')) {
        this.updateItemsLeft(0)
      } else {
        this.updateItemsLeft(-1)
      }
    }
  },
  updateItemsLeft(value) {
    this.$store.commit('mutateUncheckedItems', value)
  }
},
computed: {
  todos() {
    return this.$store.state.todos
  },
  currentFilter() {
    return this.$store.state.currentFilter
  },
  filteredTodos: function() {
    return this.todos.filter(todo => {
      if(this.currentFilter === 'all') {
        return (todo != '') 
      } else {
        return todo.filter === this.currentFilter
      }
    });
  },
}, 
watch: {

  },
}
</script>

<style>
#todo-list {
  border-radius: 5px;
  color: var(--txt-color-cards);
  /* overflow: hidden;  Conflitct with the filter-list*/
  padding: 0;
  min-width: 30%;
  transition: .5s
}

.todo-item {
  background-color: var(--bg-color-cards);
  border-bottom: 1px solid var(--bder-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .7rem;
  position: relative;
  gap: .5rem;
}

/* When the item is checked  */
.check-border {
  background-color: var(--bg-color-cards);
  border: 1px solid var(--bder-color);
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  bottom: 2px;
}

.checked{
  background-image: var(--bg-check);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  min-width: 20px;
  position: relative;
  bottom: 2px;
}

.todo-text {
  color: var(--txt-color-cards);
  flex: 1;
  font-size: .7rem;
  transition: .4s;
}

.checked-text {
  color: var(--txt-color-checked);
  flex: 1;
  font-size: .65rem;
  opacity: 70%;
  text-decoration: line-through;
  transition: .4s;
}

.delete-btn {
  background-color: var(--bg-color-cards);
  border: none;
  cursor: pointer;
  height: 25px;
  width: 45px;
  float: right;
}

.checked-btn svg, .delete-btn svg {
  pointer-events: none;
}

.delete-btn:hover > svg path {
  fill: red;
}

/* When the item is removed  */
.item-dash {
  transform: translateX(100%);
  transition: .5s;
  opacity: 0;
}
</style>