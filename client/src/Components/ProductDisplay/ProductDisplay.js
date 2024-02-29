import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { image, name, old_price, new_price } = props.product;
  return (
    <div className="flex mx-40">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img src={image} alt="product" className="h-40" />
          <img src={image} alt="product" className="h-40" />
          <img src={image} alt="product" className="h-40" />
          <img src={image} alt="product" className="h-40" />
        </div>
        <div>
          <img src={image} alt="product" className="h-[700px] w-[586px]" />
        </div>
      </div>
      <div>
        <h1>{name}</h1>
        <div className="flex">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div>
          <div>${old_price}</div>
          <div>${new_price}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductDisplay;
