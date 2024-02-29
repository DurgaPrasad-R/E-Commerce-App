import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex">
      HOME <img src={arrow_icon} alt="arrow" className="mx-2" /> SHOP{" "}
      <img src={arrow_icon} alt="arrow" className="mx-2" /> {product.category}{" "}
      <img src={arrow_icon} alt="arrow" className="mx-2" /> {product.name}
    </div>
  );
};
export default Breadcrum;
