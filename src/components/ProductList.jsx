import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100", category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100", category: "Indoor" },
  { id: 3, name: "Rose", price: 20, image: "https://via.placeholder.com/100", category: "Flower" },
  { id: 4, name: "Tulip", price: 12, image: "https://via.placeholder.com/100", category: "Flower" },
  { id: 5, name: "Cactus", price: 8, image: "https://via.placeholder.com/100", category: "Succulent" },
  { id: 6, name: "Fern", price: 18, image: "https://via.placeholder.com/100", category: "Indoor" }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plant Shop</h2>
      {plants.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addItem(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;