import { defineComponent } from 'vue'
import logo from '../assets/logo.png'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return () => (
      <h1 class="title">
        <img class="logo" src={logo} />
        <br />
        Todo App
      </h1>
    )
  },
})
