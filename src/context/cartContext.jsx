import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

CartProvider.propTypes = {
  children: PropTypes.node,
};

export function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };

  const clearCart = () => {
    setCartItemCount(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItemCount, updateCartItemCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
