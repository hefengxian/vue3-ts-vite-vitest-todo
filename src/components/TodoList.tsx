import { defineComponent, PropType } from 'vue'
import TodoListItem from './TodoListItem'

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <ul class="todo-list" v-show={props.todos.length > 0}>
        {props.todos.map(todo => (
          <TodoListItem key={todo.uuid} todo={todo} />
        ))}
      </ul>
    )
  },
})
