import footer_logo from "../Assets/logo_big.png";
import insta_icon from "../Assets/instagram_icon.png";
import pin_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex items-center gap-5">
        <img src={footer_logo} alt="/" />
        <p className="font-semibold text-3xl">SHOPPER</p>
      </div>
      <ul className="flex gap-5 text-gray-900 text-lg">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-2 border bg-gray-50 border-white">
          <img src={insta_icon} alt="/" />
        </div>
        <div className="p-2 border bg-gray-50 border-white">
          <img src={whatsapp_icon} alt="/" />
        </div>
        <div className="p-2 border bg-gray-50 border-white">
          <img src={pin_icon} alt="/" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 mb-7 text-lg w-full">
        <hr className="w-3/4 border-none rounded-lg h-1 bg-gray-300" />
        <p>&copy; Copyright 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
