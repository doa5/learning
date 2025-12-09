import { renderOrderSumamry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js"
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js'
// import '../data/backend-practise.js'

async function loadPage() {
  try{
    //  throw 'shakur was here'
    await loadProductsFetch()
  
    const value = await new Promise((resolve) => {
      loadCart(() => {
        resolve('value3')
      })
    })  
  } catch (error) {
    console.log(`Unexpected error. Please try again ${error}`)
  }

  renderOrderSumamry()
  renderPaymentSummary()
}
loadPage()

/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })

]).then((values)=> {
  console.log(values)
  renderOrderSumamry()
  renderPaymentSummary()
})

*/
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1')
  })

}).then((value) => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve()
    })
  })

}).then(() => {
  renderOrderSumamry()
  renderPaymentSummary()
})
  */


/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSumamry()
    renderPaymentSummary()
  })
})
*/
