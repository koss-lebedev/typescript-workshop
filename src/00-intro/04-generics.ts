/* GENERICS */

interface IBoxed<T> {
  value: T
}

const unbox = (box: IBoxed<number>) => {
  return box.value
}
