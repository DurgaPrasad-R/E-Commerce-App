import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
const Cart = () => {
  const { cart } = useContext(ShopContext);
  return (
    <div className="relative">
      <Link to="/cart">
        <img src={cart_icon} alt="cart" className="w-8 h-8" />

        <sup className="absolute top--1 right-[-0.5rem]">
          <div className="w-5 h-5 flex justify-center items-center bg-red-500 text-white rounded-full">
            {/*reduce function to fetch the no of cart items*/}
            {Object.values(cart).reduce((a, b) => a + b, 0)}
          </div>
        </sup>
      </Link>
    </div>
  );
};
export default Cart;
