import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Fern", price: 18, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Palm", price: 25, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Rubber Plant", price: 22, image: "https://via.placeholder.com/100" }
  ],
  Flower: [
    { id: 7, name: "Rose", price: 20, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulip", price: 12, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Lily", price: 18, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Sunflower", price: 15, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Daisy", price: 10, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Orchid", price: 30, image: "https://via.placeholder.com/100" }
  ],
  Succulent: [
    { id: 13, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Agave", price: 14, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Echeveria", price: 16, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Haworthia", price: 12, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Sedum", price: 9, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Aloe", price: 11, image: "https://via.placeholder.com/100" }
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
              <img src={p.image} alt={p.name} />
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