import { useSelector } from 'react-redux'

export function Sum() {
  const cart = useSelector((store) => store.cart)
  const totalPrice = cart.reduce((summ, product) => (
    (product.isSelected) ? summ + product.price * product.count
      : summ), 0)
  return (
    <div>
      <h1>Корзина</h1>
      <p>Cумма покупки:</p>
      <p>{totalPrice}</p>
    </div>
  )
}
