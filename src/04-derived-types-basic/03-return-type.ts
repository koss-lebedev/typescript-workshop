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

export const reducer = (state: ReadonlyArray<ITodoItem>, action: TodoAction) => {

  return [...state, action.payload.item]
}
