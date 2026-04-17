import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 }
  ],
  Flower: [
    { id: 3, name: "Rose", price: 20 },
    { id: 4, name: "Tulip", price: 12 }
  ],
  Succulent: [
    { id: 5, name: "Cactus", price: 8 },
    { id: 6, name: "Fern", price: 18 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  return (
    <div>
      <h2>Plant Shop</h2>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants[category].map(p => (
            <div key={p.id}>
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                disabled={added.includes(p.id)}
                onClick={() => {
                  dispatch(addItem(p));
                  setAdded([...added, p.id]);
                }}
              >
                {added.includes(p.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;