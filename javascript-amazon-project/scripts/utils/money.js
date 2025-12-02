export function formatCurrency(pricePence) {
  return (pricePence / 100).toFixed(2)
}

export default formatCurrency