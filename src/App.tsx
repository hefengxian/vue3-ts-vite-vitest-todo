import './App.less'
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  setup() {


    return () => {
      return (
        <HelloWorld />
      )
    }
  },

})
