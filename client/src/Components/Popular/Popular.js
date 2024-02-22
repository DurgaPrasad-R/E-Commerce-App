import data_product from "../Assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-24 h-[90vh] font-pops">
      <h1 className="text-3xl font-medium">POPULAR IN WOMEN</h1>
      <hr className="w-52 h-1 rounded-xl bg-gray-600" />
      <div className="mt-12 flex gap-7">
        {data_product.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Popular;
