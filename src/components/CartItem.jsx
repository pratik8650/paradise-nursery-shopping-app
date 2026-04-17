import React, { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Cart Item</h2>
      <p>Price: $10</p>
      <p>Quantity: {quantity}</p>

      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>

      <button>Remove</button>
    </div>
  );
};

export default CartItem;