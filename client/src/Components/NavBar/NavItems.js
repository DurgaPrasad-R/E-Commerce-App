const NavItems = ({ menu, setMenu }) => {
  return (
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
  );
};
export default NavItems;
