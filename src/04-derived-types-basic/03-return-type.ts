interface ITodoItem {
  title: string
  isDone: boolean
}

const addTodo = (item: ITodoItem) => ({
  type: 'ADD_TODO',
  payload: {
    item,
  },
})

type TodoAction = ReturnType<typeof addTodo>

export const reducer = (state: ReadonlyArray<ITodoItem>, action: TodoAction) => {

  return [...state, action.payload.item]
}
