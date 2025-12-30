import { createContext, useReducer } from "react";
import { useContext } from "react";
import { cartReducer } from "../reducer/cartReducer";

// initial state
const initialState = {
  cartList: [],
  total: 0,
};

//create context
const CartContext = createContext(initialState);

// create provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product);
    updateTotal(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updateTotal(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total = total + product.price;
    });
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
