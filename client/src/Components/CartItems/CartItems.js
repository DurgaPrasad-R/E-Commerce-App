import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { cart, all_product, removeFromCart, getTotal } =
    useContext(ShopContext);
  return (
    <div className="mx-40 my-24 font-pops">
      <div className="grid custom-grid-templates items-center text-base gap-10 px-0 py-5 font-bold text-gray-600">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-gray-300 border-0" />
      {all_product.map((product) => {
        if (cart[product.id] > 0) {
          return (
            <div>
              <div className="grid custom-grid-templates gap-10 items-center text-base font-medium px-0 py-5 text-gray-600">
                <img src={product.image} alt="product" className="h-16" />
                <p>{product.name}</p>
                <p>{product.new_price}</p>
                <button className="w-16 h-12 border bg-white border-gray-300">
                  {cart[product.id]}
                </button>
                <p>${product.new_price * cart[product.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                  alt="remove"
                  className="w-4 my-0 mx-10 cursor-pointer"
                />
              </div>
              <hr className="h-1 bg-gray-300 border-0" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex mx-0 my-24">
        <div className="flex-1 flex flex-col gap-10 mr-48">
          <h1 className="font-bold">Cart Totals</h1>
          <div>
            <div className="flex justify-between px-0 py-4">
              <p>Subtotal</p>
              {console.log(getTotal())}
              <p>${getTotal()}</p>
            </div>
            <hr className="h-1 bg-gray-300 border-0" />
            <div className="flex justify-between px-0 py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-1 bg-gray-300 border-0" />
            <div className="flex justify-between px-0 py-4">
              <h3>Total</h3>
              {console.log(getTotal())}
              <p>${getTotal()}</p>
            </div>
          </div>
          <button className="py-3 px-8 text-xs border-none outline-none bg-red-500 text-white font-semibold w-52">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-base font-medium">
          <p className="text-gray-700">
            If you have a promo code, Enter it here
          </p>
          <div className="w-[420px] mt-4 pl-5 h-14 bg-slate-300">
            <input
              type="text"
              placeholder="promo code"
              className="border-none outline-none bg-transparent text-base w-72 h-14"
            />
            <button className="bg-black w-28 h-14 text-base text-white cursor-pointer">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
