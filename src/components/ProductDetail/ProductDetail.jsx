import { Link, useParams } from "react-router-dom";
import { useAPI } from "../../Hooks/useAPI";
import "./ProductDetail.css";
import { StorageSelector } from "../StorageSelector/StorageSelector";
import { ColorSelector } from "../ColorSelector/ColorSelector";
import { useState } from "react";

export function ProductDetail() {
  const { product_id } = useParams();
  const { data } = useAPI(
    `https://itx-frontend-test.onrender.com/api/product/${product_id}`
  );
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
              <h2>Description</h2>
              <p>Brand: {data.brand}</p>
              <p>Model: {data.model}</p>
              <p>Price: {data.price}</p>
              <p>CPU: {data.cpu}</p>
              <p>RAM: {data.ram}</p>
              <p>Operational System: {data.os}</p>
              <p>Display resolution: {data.displayResolution}</p>
              <p>Battery: {data.battery}</p>
              <p>Primary Camera: {data.primaryCamera}</p>
              <p>Secondary Camera: {data.secondaryCamera}</p>
              <p>Dimentions: {data.dimentions}</p>
              <p>Weight: {data.weight}</p>
            </div>
            <h2>Actions</h2>
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
                  <span className="button-quantity">{quantity}</span>
                  <button className="button-increase" onClick={handleIncrease}>
                    +
                  </button>
                </div>
                <div>
                  <button className="button-addCart">Add to Cart</button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
