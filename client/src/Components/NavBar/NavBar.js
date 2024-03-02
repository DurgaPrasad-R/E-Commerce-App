import Logo from "./Logo";
import Cart from "./Cart";
import Login from "./LoginBtn";
import NavItems from "./NavItems";
import { useState } from "react";
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex justify-around py-3 px-7 shadow font-pops">
      <Logo />
      <NavItems menu={menu} setMenu={setMenu} />
      <Login />
      <div className="flex items-center">
        <Cart />
      </div>
    </div>
  );
};
export default NavBar;
