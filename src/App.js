import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListComponent from "./pages/productList/product-list-component";
import ShoppingcartComponent from "./pages/checkout/checkout-component";

function App() {
  // return <h1>Hello</h1>;
  return (
    <Routes>
      <Route path="/home" element={<ProductListComponent />} />
      <Route path="/shopping-cart" element={<ShoppingcartComponent />} />
    </Routes>
  );
}

export default App;
