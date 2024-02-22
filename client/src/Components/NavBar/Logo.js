import logo from "../Assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="" />
      <p className="text-gray-900 text-2xl font-semibold">SHOPPER</p>
    </div>
  );
};
export default Logo;
