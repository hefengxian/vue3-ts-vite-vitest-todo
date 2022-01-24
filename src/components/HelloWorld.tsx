import { defineComponent } from 'vue'
import logo from '../assets/logo.png'
import './HelloWorld.less'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const msg = "Hello World."
    return () => {
      return (
        <div class="hello-world">
          <img src={logo} alt="Logo" />
          <h1>{msg}</h1>
        </div>

      )
    }
  },
})
