import React from "react";
const DescriptionBox = () => {
  return (
    <div className="mx-40 my-28 font-pops">
      <div className="flex">
        <div className="flex items-center justify-center font-semibold text-base w-40 h-10 border border-l-slate-300">
          Description
        </div>
        <div className="flex items-center justify-center font-semibold text-base w-40 h-10 border border-l-slate-300 bg-gray-50 text-gray-500">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-5 border border-l-slate-300 p-8 pb-8">
        <p>
          Discover a world of amazing products at our e-commerce store. Shop the
          latest trends in fashion, electronics, and more. Quality products at
          unbeatable prices, just for you. Explore a wide range of categories
          and find what suits you best. Your one-stop destination for online
          shopping happiness! Join our community of happy customers and shop
          with confidence.Exciting deals and discounts on every purchase.
        </p>
        <p>
          Dont miss out! Browse through our extensive collection of premium
          products. Your satisfaction is our top priority.Experience the
          convenience of online shopping with our user-friendly platform.
          Unleash the joy of discovering new and exciting products.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
