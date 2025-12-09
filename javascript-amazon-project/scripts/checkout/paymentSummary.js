import { cart } from "../../data/cart.js"
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import formatCurrency from "../utils/money.js";
import { calculateCartQuantity } from "../../data/cart.js";
import { addOrder } from "../../data/orders.js";

export function renderPaymentSummary() {
  let productPricePence = 0
  let shippingPricePence = 0
  const cartQuantity = calculateCartQuantity()
  
  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId)
    productPricePence += product.pricePence * cartItem.quantity

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
    shippingPricePence += deliveryOption.pricePence
  });

  const totalBeforeTaxPence = productPricePence + shippingPricePence
  const taxPence = totalBeforeTaxPence * 0.1
  const totalPence = totalBeforeTaxPence + taxPence

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartQuantity}):</div>
      <div class="payment-summary-money">
        £${formatCurrency(productPricePence)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        £${formatCurrency(shippingPricePence)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        £${formatCurrency(totalBeforeTaxPence)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        £${formatCurrency(taxPence)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        £${formatCurrency(totalPence)}
      </div>
    </div>

    <button class="place-order-button button-primary js-place-order-button">
      Place your order
    </button>
    `

    document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML

    document.querySelector('.js-place-order-button')
      .addEventListener('click', async () => {
        try {
          const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cart
          })
        })
        const order = await response.json()
        addOrder(order)

        } catch (error) {
          console.log('unexpected error. Try again later')
        }
        
        window.location.href = 'orders.html'
        
      })
}