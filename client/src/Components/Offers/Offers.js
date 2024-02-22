import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="flex m-auto h-[60vh] w-[65%] items-center justify-center bg-gradient-to-b from-purple-100 to-white p-8 font-pops gap-20">
      <div className="text-left max-w-md">
        <h1 className="text-4xl font-bold">Exclusive</h1>
        <h1 className="text-4xl font-bold">Offers For You</h1>
        <p className="text-lg mb-4">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-52 bg-red-500 h-10 border-none text-white rounded-[35px] font-medium">
          Check Now
        </button>
      </div>
      <div className="ml-8">
        <img src={exclusive_image} alt="offers" className="max-h-80" />
      </div>
    </div>
  );
};
export default Offers;
