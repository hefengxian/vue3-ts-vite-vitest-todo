import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { store } from "./Storage"
import { uuid } from "./Utils"

describe('Base function test', () => {
  test('add a todo', () => {
    store.addTodo({
      uuid: uuid(),
      text: 'New Todo',
      done: false
    })
    expect(store.state.todos).toHaveLength(1)
  })

  test('remove a todo', () => {
    const todoWillRemove = store.state.todos[0]
    store.removeTodo(todoWillRemove)
    expect(store.state.todos).toHaveLength(0)
  })
})

describe('Reactive test', () => {
  test('is reactive', async () => {
    store.state.todos = [
      {uuid: 'aa', text: 'Item 1', done: false}
    ]
    const wrapper = mount(() => (
      <ul>
        { store.state.todos.map(todo => (<li>{todo.text}</li>)) }
      </ul>
    ))
    expect(wrapper.findAll('li')).toHaveLength(1)
    await store.addTodo({uuid: 'bb', text: 'Item 2', done: false})
    expect(wrapper.findAll('li')).toHaveLength(2)
  })
})
