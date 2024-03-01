import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { image, name, old_price, new_price } = props.product;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex mx-40 font-pops">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img src={image} alt="product" />
          <img src={image} alt="product" />
          <img src={image} alt="product" />
        </div>
        <div className="flex justify-center items-center">
          <img src={image} alt="product" className="w-[580px] " />
        </div>
      </div>
      <div className="my-0 mx-16 flex flex-col">
        <h1 className="font-semibold text-3xl">{name}</h1>
        <div className="flex mt-3 items-center gap-1 text-lg">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="flex my-7 mx-0 gap-7 font-semibold">
          <div className="text-gray-500 line-through">${old_price}</div>
          <div className="text-red-500">${new_price}</div>
        </div>
        <div>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div>
          <h1 className="my-3 mx-0">Select Size</h1>
          <div className="flex gap-4 my-4 mx-0">
            <div className="px-6 py-4 border-[1px] bg-slate-50 border-l-slate-300 rounded-sm cursor-pointer">
              S
            </div>
            <div className="px-6 py-4 border-[1px] bg-slate-50 border-l-slate-300 rounded-sm cursor-pointer">
              M
            </div>
            <div className="px-6 py-4 border-[1px] bg-slate-50 border-l-slate-300 rounded-sm cursor-pointer">
              L
            </div>
            <div className="px-6 py-4 border-[1px] bg-slate-50 border-l-slate-300 rounded-sm cursor-pointer">
              XL
            </div>
          </div>
        </div>
        <button
          className="py-3 px-8 text-xs border-none outline-none bg-red-500 text-white font-semibold w-52"
          onClick={() => {
            addToCart(props.product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="mt-3">
          <span className="font-semibold">Category: </span>Women, T-shirt,
          Summer Collection
        </p>
        <p className="mt-3">
          <span className="font-semibold">Tags: </span>Modern, Latest, Trendy,
          Fashionable
        </p>
      </div>
    </div>
  );
};
export default ProductDisplay;
