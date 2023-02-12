/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart } from '../../../redux/slices/cartSlices'

export function CatalogButton({ el }) {
  const cart = useSelector((store) => store.cart)
  const idsInCart = cart.map((product) => product.id)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addCart({
      id: el._id,
      count: 1,
      price:
      el.price,
      stock: el.stock,
      name: el.name,
      pictures:
      el.pictures,
    }))
  }

  const deleteFromCart = () => {
    dispatch(deleteCart({ id: el._id }))
  }

  let $cartButton = <button type="button" className="btn btn-warning" onClick={addToCart}>В корзину</button>

  if (idsInCart.includes(el._id)) {
    $cartButton = <button type="button" className="btn btn-warning" onClick={deleteFromCart}>Удалить из корзины</button>
  }
  return (
    <>
      {$cartButton}
    </>
  )
}
