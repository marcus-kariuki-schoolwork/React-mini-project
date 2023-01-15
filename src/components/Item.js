import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setaddToCart] = useState(false);

  function handleAddToCart(){
    setaddToCart((addToCart) => !addToCart);
  }


  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{addToCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
