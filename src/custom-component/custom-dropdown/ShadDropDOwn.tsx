// ShadDropDown.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.js";
import React from "react";

interface MenuItem {
  id: number;
  categoryName: string;
}

interface Props {
  menuItem?: MenuItem[];
  selectedCategory?: string;
  onSelectCategory: (category: MenuItem) => void;
}

const ShadDropDown: React.FC<Props> = ({
  menuItem = [],
  selectedCategory = "All",
  onSelectCategory,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-white h-11 w-72 outline-none border border-gray-300">
        <input
          type="text"
          placeholder={selectedCategory || "Select Option"}
          className="h-full w-full outline-none bg-transparent pl-4"
          readOnly
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItem.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => onSelectCategory(item)}
            className="h-11 w-64"
          >
            {item.categoryName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShadDropDown;
