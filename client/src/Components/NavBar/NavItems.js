import { Link } from "react-router-dom";

const NavItems = ({ menu, setMenu }) => {
  return (
    <ul className="md:text-base flex items-center list-none gap-12 text-gray-500 font-medium">
      <li
        onClick={() => {
          setMenu("shop");
        }}
        className="flex flex-col gap-1 items-center justify-center cursor-pointer"
      >
        <Link to="/"> Shop</Link>
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
        <Link to="/men">Men</Link>
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
        <Link to="/women">Women</Link>
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
        <Link to="/kids">Kids</Link>
        {menu === "kids" && (
          <hr className="border-none bg-red-400 w-3/4 rounded-lg h-1" />
        )}
      </li>
    </ul>
  );
};
export default NavItems;
