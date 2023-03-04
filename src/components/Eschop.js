import ProductList from "./ProductList";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import { cart as initialCart, products as initialProducts } from "../utils.js";
import { useState } from "react";

const Eshop = () => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState(initialCart);
  return (
    <>
      <Header cart={cart} />
      <ProductList products={initialProducts} cart={cart} setCart={setCart} />
      <ShoppingCart cart={cart} setCart={setCart} />
    </>
  );
};

export default Eshop;
