const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-7 my-20 m-auto h-[40vh] p-8 w-[65%] items-center justify-center bg-gradient-to-b from-purple-100 to-white font-pops">
      <h1 className="flex justify-center text-3xl font-bold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="flex justify-center">
        Subscribe to Our Newsletter and stay updated
      </p>
      <div className="flex items-center w-[600px] justify-center rounded-3xl border-2">
        <input
          type="text"
          className="w-[500px] border-none bg-transparent outline-none font-pops ml-12"
          placeholder="Your Email Here"
        />
        <button
          type="submit"
          className="w-[210px] h-10 rounded-[80px] bg-black text-white"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default NewsLetter;
