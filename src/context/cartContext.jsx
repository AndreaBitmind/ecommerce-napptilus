import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

CartProvider.propTypes = {
  children: PropTypes.node,
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const updateCartItemQuantity = (itemId, changeAmount) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + changeAmount }
          : cartItem
      )
    );
  };

  const addToCart = (item, quantity) => {
    // Buscar si el ítem ya está en el carrito
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Si el ítem ya existe, actualiza la cantidad
      const updateCartItems = [...cartItems];
      updateCartItems[existingItemIndex].quantity += quantity;

      setCartItems(updateCartItems);
    } else {
      // Si el ítem no existe, agrégalo al carrito
      setCartItems([...cartItems, { item, quantity }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        updateCartItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
