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
