import {
  CART_ADD, CART_COUNTER_DECREMENT, CART_COUNTER_INCREMENT, CART_DELETE, CART_SELECT, CART_UNSELECT,
} from '../../types/cartTypes'
// eslint-disable-next-line default-param-last
export const cartReducer = (state = null, action) => {
  switch (action.type) {
    case CART_ADD:
      return [action.payload, ...state]
    case CART_DELETE:
      return state.filter((elem) => elem.id !== action.payload.id)
    case CART_COUNTER_INCREMENT:
      return state.map((elem) => (elem.id === action.payload.id && elem.count < elem.stock ? {
        ...elem,
        count: elem.count + 1,
      } : elem))
    case CART_COUNTER_DECREMENT:
      return state
        .map((elem) => (elem.id === action.payload.id && elem.count !== 0 ? {
          ...elem,
          count: elem.count - 1,
        } : elem))
        .filter((elem) => elem.count > 0)
    case CART_SELECT:
      return state
        .map((elem) => (elem.id === action.payload.id ? {
          ...elem,
          isSelected: true,
        } : elem))
    case CART_UNSELECT:
      return state
        .map((elem) => (elem.id === action.payload.id ? {
          ...elem,
          isSelected: false,
        } : elem))
    default:
      return state
  }
}
