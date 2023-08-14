import "./ProductItem.css";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    model: PropTypes.string,
  }).isRequired,
};

export function ProductItem({ item }) {
  return (
    <div className="item-container">
      <img src={item.imgUrl} width="100" height="100" alt={item.brand} />
      <ul className="item-settings">
        <li className="item-settings__setting">Marca: {item.brand}</li>
        <li className="item-settings__setting">Modelo: {item.model} </li>
        <li className="item-settings__setting">Precio: {item.price} </li>
      </ul>
    </div>
  );
}
