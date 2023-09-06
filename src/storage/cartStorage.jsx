export const saveItemsLocalStorage = (cartItems) => {
  localStorage.setItem("item", JSON.stringify(cartItems));
};

export const getItemsLocalStorage = () => {
  const cartData = localStorage.getItem("item");
  return cartData ? JSON.parse(cartData) : [];
};
