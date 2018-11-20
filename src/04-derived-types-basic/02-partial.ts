interface IUser {
  username: string
  age: number
  createdAt: Date
}

const updateUser = (id: string, user: IUser) => {
  // ... call some PATCH API
}

updateUser('123-456-789', { age: 25 })
