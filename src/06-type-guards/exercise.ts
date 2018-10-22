interface ICreditCard {
  holder: string
  number: string
}

const LOAD_CREDIT_CARDS = 'LOAD_CREDIT_CARDS' as 'LOAD_CREDIT_CARDS'
const ADD_CREDIT_CARD = 'ADD_CREDIT_CARD' as 'ADD_CREDIT_CARD'

const loadCreditCards = (creditCards: ICreditCard[]) => ({
  type: LOAD_CREDIT_CARDS,
  payload: {
    creditCards,
  }
})

const addCreditCard = (creditCard: ICreditCard) => ({
  type: ADD_CREDIT_CARD,
  payload: {
    creditCard,
  }
})

type Action =
  | ReturnType<typeof loadCreditCards>
  | ReturnType<typeof addCreditCard>

const reducer = (
  state: ReadonlyArray<ICreditCard>,
  action: Action
): ReadonlyArray<ICreditCard> => {

  switch (action.type) {
    case LOAD_CREDIT_CARDS:
      return action.payload.creditCards
    case ADD_CREDIT_CARD:
      return [...state, action.payload.creditCard]
  }
}
