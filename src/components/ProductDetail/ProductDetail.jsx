import { Link, useParams } from "react-router-dom";
import { useAPI } from "../../Hooks/useAPI";
import "./ProductDetail.css";

export function ProductDetail() {
  const { product_id } = useParams();
  const { data } = useAPI(
    `https://itx-frontend-test.onrender.com/api/product/${product_id}`
  );

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Link to="/">Back</Link>
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
          <div className="productDetail-actions">
            <h2>Actions</h2>
            <button>+</button>
            <button>-</button>
          </div>
        </section>
      </div>
    </>
  );
}
