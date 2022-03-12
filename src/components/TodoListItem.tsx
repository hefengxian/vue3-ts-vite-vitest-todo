import { defineComponent, PropType, ref } from 'vue'
import { store } from '../Storage'

export default defineComponent({
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const todo = props.todo
    const currentEdit = ref(null as null | Todo)
    const handleTodoTextClick = (e: MouseEvent) => {
      currentEdit.value = todo
      // Set element to focus
      setTimeout(() => (e.target as HTMLElement).focus(), 0)
    }
    const handleTodoTextKeyDown = (e: KeyboardEvent) => {
      if (e.key == 'Enter' || e.key == 'Escape') {
        // Remove focus
        ;(e.target as HTMLElement).blur()
        currentEdit.value = null
        e.preventDefault()
      }
    }
    const handleTodoTextFocusout = (e: FocusEvent) => {
      currentEdit.value = null
      todo.text = (e.target as HTMLElement).innerText
    }
    return () => (
      <li class="todo-item">
        <input v-model={todo.done} type="checkbox" class="toggle" />
        <div class={todo.done ? 'view done' : 'view'}>
          <span
            class="todo-text"
            onClick={handleTodoTextClick}
            onKeydown={handleTodoTextKeyDown}
            onFocusout={handleTodoTextFocusout}
            contenteditable={currentEdit.value == todo}
          >
            {todo.text}
          </span>
        </div>
        <span onClick={() => store.removeTodo(todo)} class="destroy">
          &times;
        </span>
      </li>
    )
  },
})
