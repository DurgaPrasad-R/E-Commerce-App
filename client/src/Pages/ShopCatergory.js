import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );
  return (
    <div className="font-pops">
      <img className="my-7 mx-auto w-4/5" src={props.banner} alt="banner_img" />
      <div className="flex justify-between mx-auto my-0 w-4/5 items-center">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="px-5 py-3 rounded-3xl flex items-center border-gray-300 border shoppingCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="my-5 grid grid-cols-4 gap-y-20 mx-32 shopcategory-products">
        {filteredProducts.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
      <div className="flex justify-center items-center my-16 rounded-3xl bg-gray-200 text-gray-600 w-56 h-12 mx-auto font-medium">
        Explore More
      </div>
    </div>
  );
};
export default ShopCategory;
