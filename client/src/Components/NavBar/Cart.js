import cart_icon from "../Assets/cart_icon.png";
const Cart = () => {
  return (
    <div className="relative">
      <img src={cart_icon} alt="cart" className="w-8 h-8" />

      <sup className="absolute top--1 right-[-0.5rem]">
        <div className="w-5 h-5 flex justify-center items-center bg-red-500 text-white rounded-full">
          0
        </div>
      </sup>
    </div>
  );
};
export default Cart;
