import { mount } from "@vue/test-utils"
import { expect, it } from "vitest"
import { uuid } from "../Utils"
import TodoList from "./TodoList"

const todos: Todo[] = [
  {
    uuid: uuid(),
    text: 'Todo A',
    done: false,
  },
  {
    uuid: uuid(),
    text: 'Todo B',
    done: true,
  },
  {
    uuid: uuid(),
    text: 'Todo C',
    done: false,
  },
]

const wrapper = mount(TodoList, { props: { todos } })

it('should render properly', async () => {
  expect(wrapper.findAll('.todo-item'), `Todo list item count`).toHaveLength(3)
  expect(wrapper.find('.todo-text').text(), `1st item's text`).toBe('Todo A')
  expect(wrapper.findAll('.view')[1].attributes().class, `2nd item's classes`).toBe('view done')
})
