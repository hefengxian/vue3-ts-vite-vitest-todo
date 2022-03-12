import { defineComponent, PropType } from 'vue'
import { store } from '../Storage'

export default defineComponent({
  name: 'UnderBar',
  props: {
    filterType: {
      type: String as PropType<filterType>,
      default: 'all',
    },
    filteredCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  emits: ['update:filterType'],
  setup(props, { emit }) {
    const filterChange = (type: filterType) => emit('update:filterType', type)

    return () => (
      <div class="footer">
        <div class="info">
          {props.filteredCount}/{store.state.todos.length}
        </div>
        <div class="filters">
          <button
            class={props.filterType === 'all' ? 'selected' : ''}
            onClick={() => filterChange('all')}
          >
            All
          </button>
          <button
            class={props.filterType === 'active' ? 'selected' : ''}
            onClick={() => filterChange('active')}
          >
            Active
          </button>
          <button
            class={props.filterType === 'done' ? 'selected' : ''}
            onClick={() => filterChange('done')}
          >
            Done
          </button>
        </div>
        <div class="clear-all">
          <button
            onClick={() =>
              (store.state.todos = store.state.todos.filter(t => !t.done))
            }
          >
            Clear Done
          </button>
        </div>
      </div>
    )
  },
})
