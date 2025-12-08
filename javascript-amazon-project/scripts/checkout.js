import { renderOrderSumamry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js"
// import '../data/cart-class.js'
import {Car} from '../data/car.js'

renderOrderSumamry()
renderPaymentSummary()

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
})
const car2 = new Car({
  brand: 'Tesla', 
  model: 'Model 3'
})
car1.displayInfo()

car1.go()
car1.go()
car1.go()
car1.go()
car1.go()
car1.go()
car1.displayInfo()


car2.brake()
car2.displayInfo()
car2.go()
car2.displayInfo()