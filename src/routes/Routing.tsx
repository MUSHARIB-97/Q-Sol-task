import Users from "@/pages/categories/Users";
import Home from "@/pages/home/Home";
import Jewelery from "@/pages/categories/JewelryCat";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men-clothing" element={<Users />} />
      <Route path="/jewelery" element={<Jewelery />} />
    </Routes>
  );
};

export default AppRoute;
