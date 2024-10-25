import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

interface CardItem {
  title: string;
  price: string;
  description: string;
  image: string;
  id: string;
  onClick: () => void;
}

const ItemCard: React.FC<CardItem> = ({
  title,
  price,
  description,
  image,
  id,
  onClick,
}) => {
  const truncatedTitle = title.length > 30 ? `${title.slice(0, 20)}...` : title;
  return (
    <Card
      onClick={onClick}
      id={id}
      className="relative w-[14rem] h-[20rem] group bg-white shadow-md rounded-md overflow-hidden"
    >
      <CardHeader className="w-full h-[15rem] cursor-pointer relative border-b">
        <img src={image} alt="" className="w-full h-full object-contain" />
        {/* Hover overlay for description */}
        <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
          <p className="text-xs">{description}</p>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col items-start p-4 space-y-1">
        <p className="text-[.9rem] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {truncatedTitle}
        </p>
        <p className="text-sm font-medium text-gray-700">{`${price} $`}</p>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
