import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="relative">
      <Link to="/cart">
        <img src={cart_icon} alt="cart" className="w-8 h-8" />

        <sup className="absolute top--1 right-[-0.5rem]">
          <div className="w-5 h-5 flex justify-center items-center bg-red-500 text-white rounded-full">
            0
          </div>
        </sup>
      </Link>
    </div>
  );
};
export default Cart;
