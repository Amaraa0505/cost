import React, { useEffect, useState } from "react";
import myAxios from "../../utils/axios";
import { Cards1 } from "../Cards1";
import { thousandify } from "@/utils";

const Cards = ({ totalIncome }) => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    const {
      data: { totalIncome, totalExpense }, ////
    } = await myAxios.get("/transactions/total");
    console.log("EP", totalExpense, totalIncome);
    setTotals({ ...totals, totalIncome });
    setTotals({ ...totals, totalExpense });
  };

  useEffect(() => {
    getTotalIncExp();
  }, []); ///

  return (
    <div className="flex flex-col gap-5 items-center p-8">
      <div className="flex gap-5">
        <div className="bg-blue-600 rounded-xl w-96 h-52 p-8 ">
          <p className="text-white font-semibold">Geld</p>
          <p className="text-white text-xl mt-16">Transaction</p>
        </div>

        <div className="bg-white rounded-xl w-96 h-52 p-4">
          <h1 className="font-semibold mb-1">Your Income</h1>
          <div className="bg-gray-400 rouded-full w-full h-[1.5px]"></div>
          <div className="flex flex-col gap-4">
            {totals.totalIncome && ( //
              <span className="font-bold lg:text-4xl md:text-2xl text-xl text-green-500">
                {totals.totalIncome}₮
              </span>
            )}
            {console.log("TTT", totals)}

            {!totals.totalIncome && <div className="skeleton h-9 w-full"></div>}
            <p className="text-gray-400">Your Income Amount</p>
            <div className="flex gap-2">
              <img src="dooshoo.svg"></img>
              <p>32% from last month</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl w-96 h-52 ">
          <div className="bg-white rounded-xl w-96 h-52 p-4">
            <h1 className="font-semibold mb-1">Total expenses</h1>
            <div className="bg-gray-400 rouded-full w-full h-[1.5px]"></div>
            <div className="flex flex-col gap-4">
              <div className="mt-4">
                {totals.totalExpense && (
                  <span className="font-bold lg:text-4xl md;text-2xl text-xl text-red-500">
                    -{totals.totalExpense}
                  </span>
                )}

                {!totals.totalExpense && (
                  <div className="skeleton h-9 w-full"></div>
                )}
                <p className="text-gray-400">Your Expense Amount</p>
              </div>
              <div className="flex gap-2">
                <img src="deeshee.svg"></img>
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards1 />
    </div>
  );
};

export default Cards;
