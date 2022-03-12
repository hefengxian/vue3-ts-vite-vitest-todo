import { mount } from '@vue/test-utils'
import { expect, it, test } from 'vitest'
import { store } from '../Storage'
import { uuid } from '../Utils'
import UnderBar from './UnderBar'

store.state.todos = [
  { uuid: uuid(), text: 'Active', done: false },
  { uuid: uuid(), text: 'Done', done: true },
]

const wrapper = mount(UnderBar, {
  props: { filteredCount: 1, filterType: 'active' },
})

it('should render properly', async () => {
  expect(wrapper.find('.info').text()).toBe('1/2')
  expect(wrapper.findAll('.filters button')).toHaveLength(3)
  expect(wrapper.findAll('.filters button')[1].attributes().class).toBe(
    'selected'
  )
  expect(wrapper.find('.clear-all button').text()).toBe('Clear Done')
})

test('filter event is triggering properly', async () => {
  const btns = wrapper.findAll('.filters button')
  btns.forEach(btn => {
    btn.trigger('click')
  })

  expect(wrapper.emitted()).toHaveProperty('update:filterType')
  expect(wrapper.emitted()['update:filterType'][0]).toEqual(['all'])
  expect(wrapper.emitted()['update:filterType'][1]).toEqual(['active'])
  expect(wrapper.emitted()['update:filterType'][2]).toEqual(['done'])
})

test('button [Clear Done] is working properly', async () => {
  await wrapper.find('.clear-all button').trigger('click')
  expect(store.state.todos).toHaveLength(1)
})
