import React, { useState, useContext } from "react";
import CategoryForm from "../CategoryForm";
import { CategoryContext } from "@/context/CategoryProvider";
import RecordCategory from "../RecordCategory";

const Category = ({ openCategoryForm, setOpenCategoryForm }) => {
  const [open, setOpen] = useState(false);
  const { categories, selectedCategories, onSelectCategory } =
    useContext(CategoryContext);
  const category = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication, PC" },
    { name: "Financial expenses" },
    { name: "Invenstments" },
    { name: "Income" },
    { name: "Others" },
  ];

  return (
    <div className="mt-3">
      <div className="flex justify-between">
        <h1 className="font-semibold">Category</h1>
        <button className="text-gray-300">Clear</button>
      </div>
      {categories?.map((category) => (
        <RecordCategory
          selectedCategories={selectedCategories}
          onSelectCategory={onSelectCategory}
          name={category.name}
          key={category.id}
        />
      ))}
      <div>
        {category.map((category, index) => (
          <div className="flex gap-2 mt-3">
            <img src="nud.svg"></img>
            <p>{category.name}</p>
            <img src="arrow.svg"></img>
          </div>
        ))}
      </div>
      <button
        onClick={() => setOpenCategoryForm(true)}
        className="mt-4 bg-green-600 rounded-full p-2 w-full"
      >
        + Add Category
      </button>
    </div>
  );
};

export default Category;
