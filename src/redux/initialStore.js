export function getInitialState() {
  const initialState = {
    cart: [],
  }
  if (localStorage.getItem('cardRT') !== null) {
    const {
      cart,
    } = JSON.parse(localStorage.getItem('cardRT'))
    initialState.cart = cart
  }

  return initialState
}
