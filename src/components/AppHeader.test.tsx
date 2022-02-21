import { mount } from "@vue/test-utils"
import { expect, test } from "vitest"
import AppHeader from "./AppHeader"

const wrapper = mount(AppHeader)

test('Should render', async () => {
  expect(wrapper.find('.logo').element.tagName).toBe('IMG')
  expect(wrapper.find('.title').text()).toBe('Todo App')
})
