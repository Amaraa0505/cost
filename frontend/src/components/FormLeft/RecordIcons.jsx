import React from "react";
import { getIcons } from "../../utils";

const RecordIcons = ({ category, changeTransactionData }) => {
  return (
    <div className="absolute bg-white w-[45%]">
      {category.map((el) => (
        <button
          className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            console.log(el.id);
            changeTransactionData("category_id", el.id);
          }}
        >
          {getIcons(el.name, el.color)}
          {el.name}
        </button>
      ))}{" "}
    </div>
  );
};

export default RecordIcons;
