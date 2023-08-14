import { useState } from "react";
import { useAPI } from "../../Hooks/useAPI";
import { ProductItem } from "../ProductItem/ProductItem";
import "./ItemList.css";

export function ItemList() {
  const { data } = useAPI("https://itx-frontend-test.onrender.com/api/product");
  const [searchTerm, setSearchTerm] = useState("");

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = data.filter((item) => {
    const brandMatch = item.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const modelMatch = item.model
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return brandMatch || modelMatch;
  });

  return (
    <div className="item-list-container">
      <input
        type="text"
        placeholder="Search by brand or model"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <ul className="item-list">
        {filteredItems.map((item) => {
          return (
            <li className="item-list__productItem" key={item.id}>
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
