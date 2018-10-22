const countReducer = (state: number, payload: number): number => {
  return state + payload
}

type CallableReducer<T> =
  T extends (state: any, payload: infer P) => infer R
    ? (payload: P) => R
    : never

const mapDispatchToProps = (reducer: CallableReducer<typeof countReducer>) => {
  reducer(2)
}
