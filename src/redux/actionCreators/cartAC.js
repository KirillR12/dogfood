import {
  CART_ADD, CART_COUNTER_DECREMENT, CART_COUNTER_INCREMENT, CART_DELETE, CART_SELECT, CART_UNSELECT,
} from '../types/cartTypes'

export const addToCartAC = ({
  id, count, price, stock, actualPrice, name, pictures,
}) => ({
  type: CART_ADD,
  payload: {
    id,
    count,
    price,
    stock,
    actualPrice,
    name,
    pictures,
    isSelected: true,

  },
})

export const deleteFromCartAC = ({ id }) => ({
  type: CART_DELETE,
  payload: {
    id,
  },
})

export const incrementCartAC = ({ id }) => ({
  type: CART_COUNTER_INCREMENT,
  payload: {
    id,
  },
})

export const decrementCartAC = ({ id }) => ({
  type: CART_COUNTER_DECREMENT,
  payload: {
    id,
  },
})

export const selectCartAC = ({ id }) => ({
  type: CART_SELECT,
  payload: {
    id,
  },
})

export const unselectCartAC = ({ id }) => ({
  type: CART_UNSELECT,
  payload: {
    id,
  },
})
