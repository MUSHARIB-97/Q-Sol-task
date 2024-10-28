import Users from "@/pages/categories/Users.js";
import Home from "@/pages/home/Home.js";
import UserHistory from "@/pages/transaction-history/UserHistory.js";
import JewelryCat from "@/pages/categories/JewelryCat.js";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men-clothing" element={<Users />} />
      <Route path="/jewelery" element={<JewelryCat />} />
      <Route path="/user-history" element={<UserHistory />} />
    </Routes>
  );
};

export default AppRoute;
