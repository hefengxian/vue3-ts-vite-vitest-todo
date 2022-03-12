import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Copyright from './Copyright'

const wrapper = mount(Copyright)

test('Should render', async () => {
  expect(
    wrapper
      .find('.copyright')
      .findAll('p')
      .map(p => p.text())
  ).toEqual(['Created by Frank', 'Powered by Vue 3 & TypeScript'])
})
