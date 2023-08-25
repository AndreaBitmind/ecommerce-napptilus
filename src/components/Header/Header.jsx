import { useCart } from "../../Hooks/useCart";
import { CartIcon } from "../Icons";
import "./Header.css";

export function Header() {
  const { cartItemCount, clearCart } = useCart();
  return (
    <header className="header">
      <h1>Mobile eCommerce</h1>
      <div className="cart-display">
        <div className="cart-display__counter-icon">
          <CartIcon />
          <div className="cart-display__counter">{cartItemCount}</div>
        </div>
        <button className="cart-display__clear" onClick={clearCart}>
          ❌
        </button>
      </div>
    </header>
  );
}
