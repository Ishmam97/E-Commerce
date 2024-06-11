//create action for adding item to cart
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from "../constants/messageConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        pId: id,
        pQt: qty,
      },
    });
    dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "Item added to cart" });
  } catch (err) {
    dispatch({ type: SHOW_ERROR_MESSAGE, payload: err.resp.data.errorMsg });
  }
  //create array of cart items from local storage if doesnt exist else append
  let cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  //check if item already exists in cart
  const item = cartItems.find((x) => x.pId === id);
  if (item) {
    //if item exists in cart then update the quantity
    cartItems = cartItems.map((x) =>
      x.pId === item.pId ? { ...item, pQt: qty } : x
    );
  } else {
    //if item doesnt exist in cart then add it to cart
    cartItems.push({
      pId: id,
      pQt: qty,
    });
  }
  //set cart items to local storage in an array of objects
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//remove item from cart action
export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
    dispatch({ type: SHOW_SUCCESS_MESSAGE, payload: "Item removed from cart" });
  } catch (err) {
    dispatch({ type: SHOW_ERROR_MESSAGE, payload: err.resp.data.errorMsg });
  }
  //create array of cart items from local storage if doesnt exist else append
  let cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  //remove item from cart
  cartItems = cartItems.filter((x) => x.pId !== id);
  //set cart items to local storage in an array of objects
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
