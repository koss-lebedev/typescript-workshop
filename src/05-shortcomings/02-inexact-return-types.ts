interface IUserProfile {
  firstName: string
  lastName: string
}

type MyFunction = (profile: IUserProfile) => IUserProfile

const myFunction: MyFunction = (profile) => {
    return {
      ...profile,
      age: 21,
    }
}

myFunction({ firstName: 'Jon', lastName: 'Doe', age: 21 })

const mySecondFunction = (profile: IUserProfile): IUserProfile => {
  return {
    ...profile,
    age: 21,
  }
}
