import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex justify-around p-4 shadow font-pops">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" />
        <p className="text-gray-900 text-2xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-12 text-gray-500 font-medium">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          Shop
          {menu === "shop" && (
            <hr className="border-none bg-red-400 w-3/4 rounded-lg h-1" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          Men
          {menu === "men" && (
            <hr className="border-none bg-red-400 w-3/4 rounded-lg h-1" />
          )}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
        >
          Women
          {menu === "women" && (
            <hr className="border-none bg-red-400 w-3/4 rounded-lg h-1" />
          )}
        </li>
        <li
          className="flex flex-col gap-1 items-center justify-center cursor-pointer"
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids
          {menu === "kids" && (
            <hr className="border-none bg-red-400 w-3/4 rounded-lg h-1" />
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <button className="w-36 h-14 outline-none border rounded-3xl font-medium cursor-pointer text-orange-500 bg-white active:bg-slate-100">
          Login
        </button>
        <div className="relative">
          <img src={cart_icon} alt="cart" className="w-8 h-8" />

          <sup className="absolute top--1 right-[-0.5rem]">
            <div className="w-5 h-5 flex justify-center items-center bg-red-500 text-white rounded-full">
              0
            </div>
          </sup>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
