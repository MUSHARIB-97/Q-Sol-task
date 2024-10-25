import React from "react";
import { NavLink } from "react-router-dom";

const SideNavbar: React.FC = () => {
  return (
    <div className="bg-gray-700 text-white w-[14rem]">
      <div className="flex flex-col gap-4 mt-8">
        <div className="pl-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-2 rounded hover:cursor-pointer ${
                isActive ? "bg-gray-600" : ""
              }`
            }
          >
            Home
          </NavLink>
        </div>
        <div className="text-md">
          <p className="pl-4 font-semibold text-lg border-b">Categories</p>
          <div className="pl-5 mt-4 flex flex-col">
            <NavLink
              to="/men-clothing"
              className={({ isActive }) =>
                `block p-2 rounded hover:cursor-pointer ${
                  isActive ? "bg-gray-600" : ""
                }`
              }
            >
              Men's Clothing
            </NavLink>
            <NavLink
              to="/jewelery"
              className={({ isActive }) =>
                `block p-2 rounded hover:cursor-pointer ${
                  isActive ? "bg-gray-600" : ""
                }`
              }
            >
              Jewelery
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
