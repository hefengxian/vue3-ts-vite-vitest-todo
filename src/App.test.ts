// @ts-ignore
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import App from './App'

test('Mount App', () => {
  const wrapper = mount(App)
  const txt = wrapper.get('h1').text()
  expect(txt).toBe('Hello World.')
})
