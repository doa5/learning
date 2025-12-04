export function formatCurrency(pricePence) {
  return (Math.round(pricePence) / 100).toFixed(2)
}

export default formatCurrency