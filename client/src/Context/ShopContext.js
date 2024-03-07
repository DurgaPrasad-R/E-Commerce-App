import React, { createContext, useEffect } from "react";
const getDefaultCart = () => {
  // Intializing cart with all products with quantity 0 i.e. empty cart
  const cart = {};
  for (let i = 0; i < 301; i++) {
    cart[i] = 0;
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
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/getcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: "",
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            setCart(data);
          });
        });
      }
    });
  }, []);
  const addToCart = (id) => {
    // Adding 1 to the quantity of the product with id
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    }
    setCart({ ...cart, [id]: cart[id] + 1 });
    console.log(cart);
  };
  const removeFromCart = (id) => {
    // Removing 1 from the quantity of the product with id
    if (cart[id] > 0) {
      if (localStorage.getItem("auth-token")) {
        fetch("http://localhost:4000/removefromcart", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
          });
        });
      }
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };
  const getTotal = () => {
    // fetches the total amount of all the products in the cart
    let sum = 0;
    for (const product of all_product) {
      sum += product.new_price * cart[product.id];
    }
    return sum;
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
