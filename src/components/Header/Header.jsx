import { useCart } from "../../Hooks/useCart";
import { CartIcon } from "../Icons";
import "./Header.css";

export function Header() {
  const { cartItemCount, clearCart } = useCart();
  return (
    <header className="header">
      <h1>Mobile eCommerce</h1>
      <div className="cart-display">
        <CartIcon />
        <div>{cartItemCount}</div>
        <button onClick={clearCart}>X</button>
      </div>
    </header>
  );
}
