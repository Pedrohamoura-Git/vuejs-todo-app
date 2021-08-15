<template>
<div class="new-todo">
  <input class="todo-input" type="text" placeholder="Create a new todo..." @keydown.enter="NewInput()">
  <button class="enter-button" @click="NewInput()">Enter</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      cont: 0
    }
  },
  methods: {
    NewInput() {
      const input = document.querySelector('.todo-input');
      var text = input.value;

      if(text !== '') { 
        input.value = ''
        this.createNewItem(text)
      }
      else {  
        alert("To create an item, the 'new todo' field cannot be empty.")
      }
    },
    createNewItem(text) {
      var todo = {}

      todo.id = this.cont++
      todo.content = text
      todo.filter = 'active'
      todo.checked = false

      this.$store.commit('addTodos', todo)
      this.$store.commit('mutateUncheckedItems', 1)
    },
  }

}
</script>

<style>
.new-todo {
  background-color: var(--bg-color-cards);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin: 1rem auto;
  padding: 1rem 1rem;
}

.todo-input {
  background-color: var(--bg-color-cards);
  border: none;
  color: var(--txt-color-cards);
  font-family: inherit;
  font-size: .7rem;
  width: 75%;
}

.todo-input:focus-visible {
  outline: none;
}

.enter-button {
  background-color: var(--bg-color-cards);
  color: var(--btn-color);
  font-size: .7rem;
  border: none;
}

.enter-button:hover {
  cursor: pointer;
}

</style>