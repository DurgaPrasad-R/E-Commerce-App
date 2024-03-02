import React, { useState } from "react";
import "./ListProduct.css";
import { useEffect } from "react";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div>
      <h1>All Products List</h1>
      <div className="list-product">
        <div className="listproduct-itemfield">
          <div className="listproduct-item">Image</div>
          <div className="listproduct-item">Product Name</div>
          <div className="listproduct-item">Category</div>
          <div className="listproduct-item">Old Price</div>
          <div className="listproduct-item">New Price</div>
          <div className="listproduct-item">Action</div>
        </div>
        <div className="listproduct-allproduct">
          <hr />
          {console.log(allProducts)}
          {allProducts.map((product, index) => {
            return (
              <div key={index} className="listproduct-itemfield">
                <div className="listproduct-item">
                  <img src={product.image} alt="product" />
                </div>
                <div className="listproduct-item">{product.name}</div>
                <div className="listproduct-item">{product.category}</div>
                <div className="listproduct-item">{product.old_price}</div>
                <div className="listproduct-item">{product.new_price}</div>
                <img
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt="delete"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
