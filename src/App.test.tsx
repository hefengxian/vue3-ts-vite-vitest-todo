import { mount } from '@vue/test-utils'
import { it } from 'vitest'
import App from './App'
import { store } from './Storage'
import { uuid } from './Utils'

store.state.todos = [
    {uuid: uuid(), text: 'Todo Item A', done: false},
    {uuid: uuid(), text: 'Todo Item B', done: false},
    {uuid: uuid(), text: 'Todo Item C', done: false},
]

it('will render without crashing', () => {
  const app = mount(App)
  app.unmount()
})
