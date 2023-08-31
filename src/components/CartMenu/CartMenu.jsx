import { useCart } from "../../Hooks/useCart";
import "./CartMenu.css";

function CartMenu() {
  const { cartItems, clearCart, updateCartItemQuantity, removeFromCart } =
    useCart();

  const handleDecrease = (cartItem) => {
    if (cartItem.quantity > 1) {
      updateCartItemQuantity(cartItem.item.id, -1);
    }
  };

  const handleIncrease = (cartItem) => {
    updateCartItemQuantity(cartItem.item.id, 1);
  };

  return (
    <aside className="cart-menu">
      <button className="cart-menu__clear" onClick={clearCart}>
        Clear Cart
      </button>
      <ul className="cart-menu__list">
        {cartItems.map((cartItem) => (
          <li key={cartItem.item.id} className="cart-menu__item">
            <div className="cart-menu__information">
              <img src={cartItem.item.imgUrl} alt={cartItem.item.model} />
              <div className="cart-menu__specs">
                <p>
                  <strong>Brand: </strong>
                  {cartItem.item.brand}
                </p>
                <p>
                  <strong>Model: </strong>
                  {cartItem.item.model}
                </p>
                <p>
                  <strong>Quantity: </strong>
                  {cartItem.quantity}
                </p>
              </div>
            </div>
            <div className="cart-menu__buttons">
              <button
                className="cart-menu__button-decrease"
                onClick={() => handleDecrease(cartItem)}
              >
                -
              </button>
              <button
                className="cart-menu__button-increase"
                onClick={() => handleIncrease(cartItem)}
              >
                +
              </button>
              <button
                className="cart-menu__button-decrease"
                onClick={() => removeFromCart(cartItem.item.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CartMenu;
