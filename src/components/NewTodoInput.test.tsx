import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import NewTodoInput from "./NewTodoInput"
import { store } from '../Storage'

test('Should be render <NewTodoInput />', async () => {
  const wrapper = mount(NewTodoInput)

  // Placeholder
  const input = wrapper.find('input.new-todo-input')
  expect(input.attributes()['placeholder']).toBe('What needs to be done?')

  // Set value
  input.setValue('Tidying my room')
  const inputDOM = input.element as HTMLInputElement
  expect(inputDOM.value).toBe('Tidying my room')

  // Submit to add a Todo
  await input.trigger('keyup', {
    key: 'Enter',
    keyCode: 13,
  })

  // After submit should clean input value
  expect(inputDOM.value).toBe('')

  // After submit must be a Todo item in state.todos
  expect(store.state.todos[0]['text']).toBe('Tidying my room')

  // Add more records
  input.setValue('Finish my tests')
  await input.trigger('keyup', {
    key: 'Enter',
    keyCode: 13,
  })
  expect(store.state.todos.length).toBe(2)

  const checkAll = wrapper.find('input.toggle-all')
  // Check all
  await checkAll.setValue(true)
  expect(store.state.todos.map(v => v.done)).toEqual([true, true])

  // Uncheck all
  await checkAll.setValue(false)
  expect(store.state.todos.map(v => v.done)).toEqual([false, false])
})
