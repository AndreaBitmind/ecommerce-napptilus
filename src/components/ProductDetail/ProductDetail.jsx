import { Link, useParams } from "react-router-dom";
import { useAPI } from "../../Hooks/useAPI";
import "./ProductDetail.css";
import { StorageSelector } from "../StorageSelector/StorageSelector";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { useState } from "react";
import { useCart } from "../../Hooks/useCart";

export function ProductDetail() {
  const { product_id } = useParams();
  const { data } = useAPI(
    `https://itx-frontend-test.onrender.com/api/product/${product_id}`
  );
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    setQuantity(1);
  };

  return (
    <>
      <div className="custom-link-wrapper">
        <Link to="/" className="custom-link-button">
          Back
        </Link>
      </div>
      <div className="section">
        <div className="section-wrapper">
          <img src={data.imgUrl} alt={data.model} />
          <section className="productDetail">
            <div className="productDetail-description">
              <h2>Technical specifications</h2>
              <p>
                <strong>Brand: </strong>
                {data.brand}
              </p>
              <p>
                <strong>Model: </strong>
                {data.model}
              </p>
              <p>
                <strong>Price: </strong>
                {data.price}
              </p>
              <p>
                <strong>CPU: </strong>
                {data.cpu}
              </p>
              <p>
                <strong>RAM: </strong>
                {data.ram}
              </p>
              <p>
                <strong>Operational System: </strong>
                {data.os}
              </p>
              <p>
                <strong>Display resolution: </strong>
                {data.displayResolution}
              </p>
              <p>
                <strong>Battery: </strong>
                {data.battery}
              </p>
              <p>
                <strong>Primary Camera: </strong>
                {data.primaryCamera}
              </p>
              <p>
                <strong>Secondary Camera: </strong>
                {data.secondaryCamera}
              </p>
              <p>
                <strong>Dimentions: </strong>
                {data.dimentions}
              </p>
              <p>
                <strong>Weight: </strong>
                {data.weight}
              </p>
            </div>
            <section className="productDetail-actions">
              <div className="productDetail-actions__selectors-wrapper">
                <div className="productDetail-actions__selector">
                  <p>Choose storage: </p>
                  <StorageSelector storageOptions={data.options.storages} />
                </div>
                <div className="productDetail-actions__selector">
                  <p>Choose color: </p>
                  <ColorSelector colorOptions={data.options.colors} />
                </div>
              </div>
              <div className="productDetails-actions__buttons-wrapper">
                <div>
                  <button className="button-decrease" onClick={handleDecrease}>
                    -
                  </button>
                  <span className="button-quantity">
                    <strong>{quantity}</strong>
                  </span>
                  <button className="button-increase" onClick={handleIncrease}>
                    +
                  </button>
                </div>
                <div>
                  <button className="button-addCart" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
