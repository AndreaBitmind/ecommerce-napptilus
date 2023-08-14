import { useAPI } from "../../Hooks/useAPI";
import { ProductItem } from "../ProductItem/ProductItem";

export function ItemList() {
  const { data } = useAPI("https://itx-frontend-test.onrender.com/api/product");

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="item-list">
      {data.map((item) => {
        return (
          <li className="item-list__productItem" key={item.id}>
            <ProductItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
