import './App.less'
import { computed, defineComponent, ref } from 'vue'
import { store } from './Storage'
import AppHeader from './components/AppHeader'
import NewTodoInput from './components/NewTodoInput'
import TodoList from './components/TodoList'
import UnderBar from './components/UnderBar'
import Copyright from './components/Copyright'

export default defineComponent({
  name: 'App',
  setup() {
    const filterType = ref('all' as filterType)
    const filters = {
      all: (list: Todo[]) => list,
      active: (list: Todo[]) => list.filter(t => !t.done),
      done: (list: Todo[]) => list.filter(t => t.done),
    }
    const filterdTodos = computed(() =>
      filters[filterType.value](store.state.todos)
    )
    const activeTodoCount = computed(
      () => filters['active'](store.state.todos).length
    )

    return () => (
      <>
        <AppHeader />
        <NewTodoInput />
        <TodoList todos={filterdTodos.value} />
        <UnderBar
          filteredCount={activeTodoCount.value}
          v-model:filterType={filterType.value}
        />
        <Copyright />
      </>
    )
  },
})
