/*
测试点，自己想这个组件有什么功能

1. 是否成功渲染
2. 样式是否正确
3. 切换状态功能是否正常
4. 编辑功能是否正常
5. 删除功能是否正常
*/

import { DOMWrapper, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TodoListItem from './TodoListItem'
import { store } from '../Storage'
import { uuid } from '../Utils'

// 初始化 Todos
store.state.todos = [
  { uuid: uuid(), text: 'Upload code to Github', done: false },
  { uuid: uuid(), text: 'Write test code', done: true },
]

const wrapper = mount(() => (
  <ul>{store.state.todos.map(todo => <TodoListItem todo={todo} />)}</ul>
))

test('TodoItem should be render', async () => {
  const items = wrapper.findAll('.todo-text')
  expect(items.length).toBe(2)
  expect(items.map(item => item.element.textContent)).toEqual(store.state.todos.map(todo => todo.text))
})

test('CSS classes should be set properly', async () => {
  const items = wrapper.findAll('.todo-item')
  expect(items[1].element.children[1].className, '2nd item should has class `done`').toBe('view done')
})

test('Toggle checkbox should work', async () => {
  const toggleCheckbox = wrapper.find('.toggle') as DOMWrapper<HTMLInputElement>
  expect(toggleCheckbox.element.checked, 'Render properly').toBe(false)

  // Trigger event change checkbox checked value
  await toggleCheckbox.setValue(true)
  // Class should change
  expect(wrapper.find('.view').attributes().class).toBe('view done')
  // Todo item in store should also changed
  expect(store.state.todos[0].done).toBe(true)

  // Trigger event change checkbox checked value
  await toggleCheckbox.setValue(false)
  // Class should change
  expect(wrapper.find('.view').attributes().class).toBe('view')
  // Todo item in store should also changed
  expect(store.state.todos[0].done).toBe(false)
})

test('Edit Todo text should work', async () => {
  const editableTodoText = wrapper.find('.todo-text') as DOMWrapper<HTMLSpanElement>

  // Click will enter edit model
  await editableTodoText.trigger('click')
  expect(editableTodoText.attributes().contenteditable, 'Property contenteditable shoud be "true"').toBe('true')

  // Enter key will exit edit model
  await editableTodoText.trigger('click')
  await editableTodoText.trigger('keydown', { key: 'Enter' })
  expect(editableTodoText.attributes().contenteditable).toBe('false')

  // Esc key will exit edit model
  await editableTodoText.trigger('click')
  await editableTodoText.trigger('keydown', { key: 'Escape' })
  expect(editableTodoText.attributes().contenteditable).toBe('false')

  // Lost focus will exit edit model
  await editableTodoText.trigger('click')
  expect(editableTodoText.attributes().contenteditable).toBe('true')
  await editableTodoText.trigger('focusout')
  expect(editableTodoText.attributes().contenteditable).toBe('false')

  // Edit content
  // 由于使用了 `contenteditable` 一般的表单事件是没法使用的
  // 所以直接设置值，然后使用 `focusout` 触发变动（这里也不能使用键盘事件来处理）
  editableTodoText.element.innerText = 'Content changed'
  await editableTodoText.trigger('focusout')
  expect(editableTodoText.text()).toBe('Content changed')
  expect(store.state.todos[0].text).toBe('Content changed')
})

test('Remove Todo should work', async () => {
  const removeBtn = wrapper.find('.destroy')
  await removeBtn.trigger('click')
  expect(wrapper.findAll('.todo-item')).toHaveLength(1)
  expect(store.state.todos).toHaveLength(1)
})
