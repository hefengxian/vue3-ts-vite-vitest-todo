import { reactive, watch } from 'vue'

const emptyState: AppState = {
  todos: [],
}

const LOCAL_STORAGE_KEY = 'my_todo_app'

const localStore = {
  fetch(): AppState {
    const storedStr =
      localStorage.getItem(LOCAL_STORAGE_KEY) || JSON.stringify(emptyState)
    return JSON.parse(storedStr) as AppState
  },
  save(appState: AppState) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appState))
  },
}

const store = {
  state: reactive(localStore.fetch()),
  addTodo(newTodo: Todo) {
    // console.log('Add new todo: ', newTodo)
    this.state.todos.splice(0, 0, newTodo)
  },
  removeTodo(todo: Todo) {
    // console.log('Remove todo: ', todo)
    this.state.todos.splice(this.state.todos.indexOf(todo), 1)
  },
}

watch(
  store.state,
  newVal => {
    // console.log('Write to localStorage: ', newVal)
    localStore.save(newVal)
  },
  { deep: true }
)

export { store }
