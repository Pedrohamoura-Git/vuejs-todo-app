<template>
<div id="options-list">
  <ul id="completed-list">
    <li v-if="UncheckedItems <= 1" class="cont">{{ UncheckedItems }} item Left</li>
    <li v-else class="cont">{{ UncheckedItems }} items Left</li>
    <li @click="clearCompleted" class="clear-completed">clear completed</li>
  </ul>
  <ul id="filter-list"> 
    <li id="all-option" @click="allFn" :class="{'selected-option' :  options.allSelected}">all</li>
    <li id="active-option" @click="activeFn" :class="{'selected-option' : options.activeSelected}">active</li>
    <li id="completed-option" @click="completedFn" :class="{'selected-option' : options.completedSelected}">completed</li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        allSelected: true,
        activeSelected: false,
        completedSelected: false,
      }
    }
  },
  methods: {
    clearCompleted() {
      var ActiveTodos = this.todos.filter(todo => todo.filter !== 'completed')

      this.directlyMutateTodos(ActiveTodos)
    },
    allFn() {
      if(this.options.activeSelected) {
        this.options.activeSelected = false;
      } 
      if(this.options.completedSelected) {
        this.options.completedSelected = false;
      }
      this.options.allSelected = !this.options.allSelected;
      this.commitFilter('all')
      
      console.log(`
        All: ${this.options.allSelected} | 
        Active: ${this.options.activeSelected} | 
        Completed: ${this.options.completedSelected}`
      )
    },
    activeFn() {
      if(this.options.allSelected) {
        this.options.allSelected = false;
      } 
      if(this.options.completedSelected) {
        this.options.completedSelected = false;
      }
      this.options.activeSelected = !this.options.activeSelected;
      this.commitFilter('active')

      console.log(`
        All: ${this.options.allSelected} | 
        Active: ${this.options.activeSelected} | 
        Completed: ${this.options.completedSelected}`
      )
    },    
    completedFn() {
      if(this.options.activeSelected) {
        this.options.activeSelected = false;
      } 
      if(this.options.allSelected) {
        this.options.allSelected = false;
      }
      this.options.completedSelected = !this.options.completedSelected;
      this.commitFilter('completed')

      console.log(`
        All: ${this.options.allSelected} | 
        Active: ${this.options.activeSelected} | 
        Completed: ${this.options.completedSelected}`
      )
    },
    commitFilter(payload) {
      this.$store.commit('mutateCurrentFilter', payload)
    },
    directlyMutateTodos(payload) {
      this.$store.commit('directlyMutateTodos', payload)
    },
    mutateUncheckedItems(payload) {
      this.$store.commit('mutateUncheckedItems', payload)
    }
  },
  computed: {
    UncheckedItems() {
      return this.$store.state.UncheckedItems
    },
    todos() {
      return this.$store.state.todos
    },
    itemsLeft() {
      return this.todos.map(todo => todo.checked !== true)
    }
  },
  watch: {
    itemsLeft: function() {
      var cont = 0;

      this.todos.forEach(todo => {
        if(todo.checked !== true) {
          cont++
        }
      })
      this.mutateUncheckedItems(cont)
    }
  }
}
</script>

<style>
#options-list {
  background-color: var(--bg-color-cards);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: var(--btn-color);
  font-size: .7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .7rem 1rem;
  position: relative;
  text-transform: capitalize;
}

#completed-list {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  padding: 0;
}

.cont {
  min-width: fit-content;
  /* text-align: center; */
}

#filter-list {
  background-color: var(--bg-color-cards);
  border-radius: 5px;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  padding: .8rem 0;
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
}
.clear-completed{
  background-color: var(--bg-color-cards);
  border: none;
  color: var(--btn-color);
  cursor: pointer;
  font-size: .7rem;
  margin: 0;
  min-width: fit-content;
}

#all-btn, #active-btn, #completed-btn {
  opacity: 0;
  position: absolute;
  left: -1000px;
}

#all-option, #active-option, #completed-option {
  background-color: var(--bg-color-cards);
  border: none;
  color: var(--btn-color);
  font-size: .8rem;
  font-weight: 700;
}

.selected-option {
  color: var(--btn-color-active) !important;
}


#all-option:hover, #active-option:hover, #completed-option:hover, .clear-completed:hover {
  color: var(--btn-color-active);
  cursor: pointer;
}
</style>