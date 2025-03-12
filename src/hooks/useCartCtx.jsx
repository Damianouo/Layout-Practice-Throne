import { useContext } from "react";
import { CartCtx } from "../contexts/CartCtx.jsx";

function useCartCtx() {
  const { cart, dispatch } = useContext(CartCtx);

  function setCurrency(cur) {
    dispatch({ type: "SET_CURRENCY", payload: cur });
  }

  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  function removeFromCart(itemId) {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  }

  function increaseItemCount(itemId) {
    dispatch({ type: "INCREASE_ITEM_COUNT", payload: itemId });
  }

  function decreaseItemCount(itemId) {
    dispatch({ type: "DECREASE_ITEM_COUNT", payload: itemId });
  }

  const handler = {
    setCurrency,
    addToCart,
    removeFromCart,
    increaseItemCount,
    decreaseItemCount,
  };
  return { cart, dispatch, handler };
}

export default useCartCtx;
