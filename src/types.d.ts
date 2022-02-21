interface Todo {
  uuid: string
  text: string
  done: boolean
}

interface AppState {
  todos: Todo[]
}

type filterType = 'all' | 'active' | 'done'
