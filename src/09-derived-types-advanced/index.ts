export type Primitive = string | number | boolean | undefined | null | Symbol

export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

export type DeepReadonly<T> =
  T extends Primitive ? T :
  T extends Array<infer U> ? DeepReadonlyArray<U> :
  DeepReadonlyObject<T>

/* TESTING */

interface IUser {
  name: string
  age: number
  dob: Date
  items: number[]
  todos: Array<{ name: string, isDone: boolean }>
  address: {
    city: string
  }
}

export const processUser = (user: DeepReadonly<IUser>) => {
  user.name = 'Jane'
  user.items = []
  user.dob = new Date()
  user.items[0] = 0
  user.todos[0].isDone = false
  user.address = {
    city: 'Berlin'
  }
  user.address.city = 'Berlin'
}
