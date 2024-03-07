import React, { createContext, useEffect } from "react";
import all_product from "../Components/Assets/all_product";
const getDefaultCart = () => {
  // Intializing cart with all products with quantity 0 i.e. empty cart
  const cart = {};
  for (const product of all_product) {
    cart[product.id] = 0;
  }
  return cart;
};
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = React.useState([]);
  const [cart, setCart] = React.useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/products").then((res) => {
      res.json().then((data) => {
        setAll_product(data);
      });
    });
  }, []);
  const addToCart = (id) => {
    // Adding 1 to the quantity of the product with id
    setCart({ ...cart, [id]: cart[id] + 1 });
    console.log(cart);
  };
  const removeFromCart = (id) => {
    // Removing 1 from the quantity of the product with id
    if (cart[id] > 0) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };
  const getTotal = () => {
    // fetches the total amount of all the products in the cart
    let total = 0;
    for (const product of all_product) {
      total += product.new_price * cart[product.id];
    }
    return total;
  };
  const contextValue = {
    all_product,
    cart,
    addToCart,
    removeFromCart,
    getTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
