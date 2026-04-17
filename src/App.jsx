import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      {!showProducts ? (
        <>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;