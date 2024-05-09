import Item from "../Item/Item";
import React, { useState, useEffect } from "react";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const apiUrl = process.env.REACT_APP_BACKEND;
  useEffect(() => {
    fetch(apiUrl + "/popularinwomen")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="flex flex-col items-center gap-3 mt-20 font-pops">
      <h1 className="text-3xl font-medium">POPULAR IN WOMEN</h1>
      <hr className="w-52 h-1 rounded-xl bg-gray-600" />
      <div className="mt-12 flex gap-7">
        {popular.map((item, i) => {
          return <Item key={i} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Popular;
