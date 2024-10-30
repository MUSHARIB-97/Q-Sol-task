import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "./../../redux-store/features/productSlice.js";
import Layout from "@/layout/main-layout/MainLayout.js";
import ItemCard from "@/custom-component/custom-card/ItemCard.js";

const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.product.product); // Access product data

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  // Filter for only "men's clothing" category
  const filteredData = productData.filter(
    (item: any) => item.category === "men's clothing"
  );

  const handleSearchChange = (e: any) => {
    const result = e.target.value;
    setSearchQuery(result);
    console.log(searchQuery);
  };

  return (
    <Layout>
      <div className="m-4 flex-1">
        <div className="w-[80%]" style={{ margin: "0 auto" }}>
          <div className="m-4 w-80 h-8 border-b-2 border-l-2 border-black flex justify-center items-center">
            <input
              type="search"
              placeholder="Search Your Item"
              value={searchQuery}
              onChange={handleSearchChange}
              className="outline-none w-full flex flex-1 bg-transparent pl-2 placeholder:text-slate-500"
            />
          </div>
        </div>
        <div className=" mt-8">
          <div className="flex gap-4 justify-center items-center py-4 flex-wrap">
            {filteredData.map((item: any, index: any) => (
              <ItemCard
                title={item.title}
                price={item.price}
                image={item.image}
                key={index}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
