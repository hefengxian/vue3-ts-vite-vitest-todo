import { computed, defineComponent, ref } from 'vue'
import { store } from '../Storage'
import { uuid } from '../Utils'

export default defineComponent({
  setup() {
    const todos = store.state.todos
    const newTodo = ref('')
    function addNewTodo(e: KeyboardEvent) {
      if (e.key !== 'Enter' || newTodo.value.trim() === '') return
      store.addTodo({
        uuid: uuid(),
        text: newTodo.value.trim(),
        done: false,
      })
      newTodo.value = ''
    }

    const allDone = computed({
      get: () => {
        if (
          todos.length > 0 &&
          todos.filter(t => t.done).length === todos.length
        ) {
          return true
        }
        return false
      },
      set(val: boolean) {
        todos.forEach(t => (t.done = val))
      },
    })

    return () => (
      <div class="new-todo">
        <input class="toggle-all" type="checkbox" v-model={allDone.value} />
        <input
          class="new-todo-input"
          type="text"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model={newTodo.value}
          onKeyup={addNewTodo}
        />
      </div>
    )
  },
})
