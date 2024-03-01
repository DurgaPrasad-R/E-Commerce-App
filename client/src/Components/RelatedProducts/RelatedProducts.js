import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3 font-pops">
      <h1 className="text-3xl font-medium">Related Products</h1>
      <hr className="w-52 h-1 rounded-xl bg-gray-600" />
      <div className="my-12 flex gap-7">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
