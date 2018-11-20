interface IUserProfile {
  firstName: string
  lastName: string
}

const myFunction = (profile: IUserProfile): IUserProfile => {
  return {
    ...profile,
  }
}

myFunction({ firstName: 'Jon', lastName: 'Doe' })





type MyFunction = (profile: IUserProfile) => IUserProfile

const mySecondFunction: MyFunction = (profile) => {
    return {
      ...profile,
    }
}

mySecondFunction({ firstName: 'Jon', lastName: 'Doe' })
