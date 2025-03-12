import { createContext, useReducer } from "react";

const initialState = {
  currency: "USD",
  items: [],
};

export const CartCtx = createContext(initialState);

function CartCtxProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return <CartCtx.Provider value={{ cart, dispatch }}>{children}</CartCtx.Provider>;
}

export default CartCtxProvider;

function reducer(cart, action) {
  switch (action.type) {
    case "SET_CURRENCY": {
      return { ...cart, currency: action.payload };
    }
    case "ADD_TO_CART": {
      return { ...cart, items: [...cart.items, action.payload] };
    }
    case "REMOVE_FROM_CART": {
      return { ...cart, items: cart.items.filter((item) => item.id !== action.payload) };
    }
    case "INCREASE_ITEM_COUNT": {
      return {
        ...cart,
        items: cart.items.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item,
        ),
      };
    }
    case "DECREASE_ITEM_COUNT": {
      const targetItem = cart.items.find((item) => item.id === action.payload);
      if (targetItem.count > 1) {
        return {
          ...cart,
          items: cart.items.map((item) =>
            item.id === action.payload ? { ...item, count: item.count - 1 } : item,
          ),
        };
      } else {
        return {
          ...cart,
          items: cart.items.filter((item) => item.id !== action.payload),
        };
      }
    }

    default: {
      return "[unknown action type]" + action.type;
    }
  }
}
