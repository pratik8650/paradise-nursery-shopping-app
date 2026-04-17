import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 },
  { id: 4, name: "Spider Plant", price: 12 },
  { id: 5, name: "Cactus", price: 8 },
  { id: 6, name: "Fern", price: 18 },
];

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <h2>Plants</h2>
      <p>Cart Count: {cartCount}</p>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button onClick={() => setCartCount(cartCount + 1)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;