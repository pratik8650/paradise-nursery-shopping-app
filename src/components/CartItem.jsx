import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() =>
            dispatch(updateQuantity({
              id: item.id,
              quantity: item.quantity + 1
            }))
          }>
            +
          </button>

          <button onClick={() => {
            if (item.quantity === 1) {
              dispatch(removeItem(item.id));
            } else {
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
              }));
            }
          }}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cart Amount: ${total}</h3>

      <button>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartItem;