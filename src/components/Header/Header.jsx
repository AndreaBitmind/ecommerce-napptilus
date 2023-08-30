import { useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { CartIcon } from "../Icons";
import "./Header.css";
import CartMenu from "../CartMenu/CartMenu";

export function Header() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <h1>Mobile eCommerce</h1>
      <div className="cart-display" onClick={toggleCart}>
        <CartIcon />
        <div className="cart-display__counter">{cartItems.length}</div>
      </div>
      {isCartOpen && <CartMenu />}
    </header>
  );
}
