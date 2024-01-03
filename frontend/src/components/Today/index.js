import React, { useContext } from "react";
import { CategoryContext } from "@/context/CategoryProvider";
import { TransactionContext } from "@/context/TransactionContext";
import RecordCard from "../RecordCard";

const Today = () => {
  const { transactions } = useContext(TransactionContext);
  const { selectedCategories } = useContext(CategoryContext);

  const filteredTransactions =
    selectedCategories.length !== 0
      ? transactions.filter((tr) =>
          selectedCategories.includes(tr.category_name)
        )
      : transactions;
  return (
    <div className="p-3 flex flex-col gap-4">
      <h1 className="font-semibold mb-3">Today</h1>
      {filteredTransactions?.map((transaction) => (
        <RecordCard transaction={transaction} />
      ))}
      <div className="bg-white rounded-xl p-2 flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <img></img>
          <div>
            <p>Lending & Renting</p>
            <p>14:00</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-semibold">-1,000</p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-2 flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <img></img>
          <div>
            <p>Lending & Renting</p>
            <p>14:00</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-semibold">-1,000</p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-2 flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <img></img>
          <div>
            <p>Lending & Renting</p>
            <p>14:00</p>
          </div>
        </div>
        <div>
          <p className="text-green-400 font-semibold">-1,000</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
