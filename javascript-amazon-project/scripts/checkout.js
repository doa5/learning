import { renderOrderSumamry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js"
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js'
// import '../data/backend-practise.js'

loadProducts(() => {
  renderOrderSumamry()
  renderPaymentSummary()
})

