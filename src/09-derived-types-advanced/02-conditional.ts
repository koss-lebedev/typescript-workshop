const countReducer = (state: number, payload: number): number => {
  return state + payload
}

type CallableReducer<T> = never

const mapDispatchToProps = (reducer: CallableReducer<typeof countReducer>) => {
  reducer(2)
}
