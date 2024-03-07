import Item from "../Item/Item";
import React, { useEffect, useState } from "react";
const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 mt-20 font-pops">
      <h1 className="text-3xl font-medium">New Collections</h1>
      <hr className="w-52 h-1 rounded-xl bg-gray-600" />
      <div className="grid grid-cols-4 gap-7 mt-12">
        {new_collection.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
