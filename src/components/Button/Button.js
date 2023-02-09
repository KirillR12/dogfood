/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCartAC, incrementCartAC, deleteFromCartAC, unselectCartAC, selectCartAC,
} from '../../redux/actionCreators/cartAC'
import { Quantity } from './Quantity/Quantity'

export function Button({ el }) {
  const cart = useSelector((store) => store.cart)
  const [{ count, isSelected }] = cart.filter((product) => product.id === el._id)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCartAC({ id: el._id }))
  }
  const decrement = () => {
    dispatch(decrementCartAC({ id: el._id }))
  }

  const deleteFromCart = () => {
    dispatch(deleteFromCartAC({ id: el._id }))
  }

  const radioSelect = () => {
    if (isSelected) {
      dispatch(unselectCartAC({ id: el._id }))
    } else dispatch(selectCartAC({ id: el._id }))
  }

  return (
    <div>
      <Quantity increment={increment} decrement={decrement} value={count} />
      <button className="btn btn-danger" onClick={deleteFromCart}>Удалить</button>
      <input type="radio" checked={isSelected} onClick={radioSelect} />
    </div>
  )
}
