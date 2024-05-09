import { useState } from "react";
import "./ListProduct.css";
import process from "process";
import { useEffect } from "react";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://e-commerce-app-sqbo.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("https://e-commerce-app-sqbo.onrender.com/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div>
      <h1 className="header">All Products List</h1>
      <div className="list-product">
        <div className="listproduct-format-main">
          <div className="listproduct-item">Image</div>
          <div className="listproduct-item">Product Name</div>
          <div className="listproduct-item">Category</div>
          <div className="listproduct-item">Old Price</div>
          <div className="listproduct-item">New Price</div>
          <div className="listproduct-item">Remove</div>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allProducts.map((product, index) => {
            return (
              <>
                <div
                  key={index}
                  className="listproduct-format-main listproduct-format"
                >
                  <div className="listproduct-item">
                    <img
                      src={product.image}
                      alt="product"
                      className="listproduct-icon"
                    />
                  </div>
                  <div className="listproduct-item">{product.name}</div>
                  <div className="listproduct-item">{product.category}</div>
                  <div className="listproduct-item">{product.old_price}</div>
                  <div className="listproduct-item">{product.new_price}</div>
                  <div className="listproduct-item">
                    <img
                      className="listproduct-remove-icon"
                      onClick={() => {
                        remove_product(product.id);
                      }}
                      src={cross_icon}
                      alt="delete"
                    />
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
