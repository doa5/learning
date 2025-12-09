import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {

  })

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([])
    })
    loadFromStorage()

    addToCart('cbid')
    expect(cart.length).toEqual(1)
  })
})