const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className="w-60 hover:scale-105 duration-[600ms] font-pops">
      <img src={image} alt="product-pic" />
      <p className="mt-1 mb-1">{name}</p>
      <div className="flex gap-5">
        <div className="text-cyan-900 text-lg font-semibold">${new_price}</div>
        <div className="text-gray-500 text-lg font-medium line-through">
          ${old_price}
        </div>
      </div>
    </div>
  );
};
export default Item;
