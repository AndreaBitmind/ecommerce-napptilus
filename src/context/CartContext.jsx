import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import {
  getItemsLocalStorage,
  saveItemsLocalStorage,
} from "../storage/cartStorage";

export const CartContext = createContext();

CartProvider.propTypes = {
  children: PropTypes.node,
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getItemsLocalStorage());

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

  const updateCartItemQuantity = (itemId, changeAmount) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + changeAmount }
          : cartItem
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.item.id !== itemId)
    );
  };

  const accumulatedItemsCart = cartItems.reduce((totalNumber, currentItems) => {
    return totalNumber + currentItems.quantity;
  }, 0);

  useEffect(() => {
    // Cuando cambie el carrito, actualiza LocalStorage
    saveItemsLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        updateCartItemQuantity,
        removeFromCart,
        accumulatedItemsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
