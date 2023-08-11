import { CartIcon } from "./Icons";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>eCommerce Napptilus</h1>
      <div className="cart-display">
        <CartIcon />
        <div>Num</div>
      </div>
    </header>
  );
}
