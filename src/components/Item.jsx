import "./Item.css";

export function Item() {
  return (
    <div className="item-container">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/047/746/330/large/un-nino-random-robot.jpg?1648346512"
        width="100"
        height="100"
        alt="gatitos"
      />
      <ul className="item-settings">
        <li className="item-settings__setting">Marca: </li>
        <li className="item-settings__setting">Modelo: </li>
        <li className="item-settings__setting">Precio: </li>
      </ul>
    </div>
  );
}
