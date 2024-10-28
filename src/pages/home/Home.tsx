import {
  productList,
  searchProducts,
} from "./../../redux-store/features/productSlice.js";

import ItemCard from "@/custom-component/custom-card/ItemCard.js";
import Layout from "@/layout/main-layout/MainLayout.js";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  // const productData = useSelector((state: any) => state.product.product);

  // Use filteredProducts if available, otherwise fallback to product
  const productData = useSelector((state: any) =>
    state.product.filteredProducts.length > 0
      ? state.product.filteredProducts
      : state.product.product
  );

  // useEffect(() => {
  //   dispatch(productList());
  // }, [dispatch]);

  const fetchProducts = useCallback(() => {
    dispatch(productList());
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Function to log item id
  const logItemId = (id: any) => {
    console.log("Item ID:", id);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    dispatch(searchProducts(query));
  };

  return (
    <Layout>
      <div className="m-4 flex-1 w-full overflow-hidden">
        <div className="w-full md:ml-20">
          <div className="my-4 w-80 h-8 border-b-2 border-l-2 border-black flex justify-center items-center">
            <input
              type="search"
              placeholder="Search Your Item"
              value={searchQuery}
              onChange={handleSearch}
              className="outline-none w-full flex flex-1 bg-transparent pl-2 placeholder:text-slate-500"
            />
          </div>
        </div>
        <div className=" mt-8">
          <div className=" flex gap-4 justify-center items-center py-4 flex-wrap">
            {productData.map((item: any, index: any) => {
              return (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                  onClick={() => logItemId(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
