// Home.tsx
import ShadDropDown from "@/custom-component/custom-dropdown/ShadDropDOwn.js";
import { productList } from "./../../redux-store/features/productSlice.js";
import ItemCard from "@/custom-component/custom-card/ItemCard.js";
import Layout from "@/layout/main-layout/MainLayout.js";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryItem = [
  { id: 1, categoryValue: "all", categoryName: "All" },
  { id: 2, categoryValue: "men's clothing", categoryName: "Men's Clothing" },
  { id: 3, categoryValue: "jewelery", categoryName: "Jewelery" },
  { id: 4, categoryValue: "electronics", categoryName: "Electronics" },
];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.product.product);

  const fetchProducts = useCallback(() => {
    dispatch(productList());
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSelectCategory = (category: {
    id: number;
    categoryValue: string;
    categoryName: string;
  }) => {
    setSelectedCategory(category.categoryName);
  };

  const filteredProducts = productData.filter(
    (product: any) =>
      selectedCategory === "All" ||
      product.category === selectedCategory.toLowerCase()
  );

  return (
    <Layout>
      <div className="m-4 flex-1 w-full overflow-hidden">
        <div className="w-full md:ml-20">
          <ShadDropDown
            menuItem={CategoryItem}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>
        <div className="mt-8">
          <div className="flex gap-4 justify-center items-center py-4 flex-wrap">
            {filteredProducts.map((item: any) => (
              <ItemCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                onClick={() => console.log("Item ID:", item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
