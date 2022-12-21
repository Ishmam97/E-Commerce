import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.pId === item.pId)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.pId === existItem.pId ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case REMOVE_FROM_CART:
      console.log("hello from reducer");
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.pId !== action.payload),
      }
    default:
      return state
  }
}

export default cartReducer