export const calculateDolarToBs = (valueDolar: string, dollarPrice: string) => {
  // Reemplaza comas por puntos y convierte a número
  const formattedValue = parseFloat(valueDolar.replace(',', '.')).toFixed(2)
  const formattedDollarPrice = parseFloat(dollarPrice.replace(',', '.')).toFixed(2)

  const result = Number(Number(formattedValue) * Number(formattedDollarPrice)).toFixed(2)

  console.log('result:', result)

  return valueDolar !== '' ? result.toString() : ''
}

export const calculateBsToDolar = (valueBs: string, dollarPrice: string) => {
  // Reemplaza comas por puntos y convierte a número
  const formattedValue = parseFloat(valueBs.replace(',', '.')).toFixed(2)
  const formattedDollarPrice = parseFloat(dollarPrice.replace(',', '.')).toFixed(2)

  const result = Number(Number(formattedValue) / Number(formattedDollarPrice)).toFixed(2)
  return valueBs !== '' ? result.toString() : ''
}