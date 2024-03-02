import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admin">
      <SideBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
