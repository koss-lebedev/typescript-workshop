/* CASTING */

interface IApiResponse {
  statusCode: number
  message: string
}

function getApiResponse(): any { /* implementation details... */ }

const response = getApiResponse() as IApiResponse
const response2: IApiResponse = getApiResponse()



/* OPTIONAL AND DEFAULT ARGUMENTS */

function formatFullName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return lastName
}



function formatCurrency(value: number, currencySign: string = '$') {
  return `${currencySign} ${value.toFixed(2)}`
}

formatCurrency(100, 'CZK')
formatCurrency(100)


/* CERTAINLY NOT NULL */

const rootDiv = document.getElementById('root')!



/* GENERICS */

interface IBoxed<T> {
  value: T
}

const unbox = (box: IBoxed<number>) => {
  return box.value
}



interface ITreeNode<T> {
  value: T
  left: ITreeNode<T>
  right: ITreeNode<T>
}

const renderTree = (root: ITreeNode<number>) => {
  root.value
  root.left.value
  root.right.value
}
