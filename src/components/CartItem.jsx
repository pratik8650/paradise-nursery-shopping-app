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