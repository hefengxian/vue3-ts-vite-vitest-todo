// @ts-ignore
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import App from './App'

test('Mount App', () => {
  const wrapper = mount(App)
  const txt = wrapper.get('h1.title').text()
  expect(txt).toBe('Todo App')
})
