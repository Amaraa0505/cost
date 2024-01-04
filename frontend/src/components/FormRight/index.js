import React, { useContext } from "react";
import { TransactionContext } from "@/context/TransactionContext";

const FormRigth = () => {
  const { transactionData, changeTransactionData } =
    useContext(TransactionContext);
  return (
    <div className="p-2">
      <h1 className="my-1">Name</h1>
      <input
        type="text"
        name="name"
        value={transactionData.name}
        onChange={(e) => {
          changeTransactionData(e.target.name, e.target.value);
          console.log("NAME", transactionData.name);
        }}
        placeholder="Write here"
        className="w-full p-2 bg-slate-100 rounded-xl"
      />
      <h1 className="my-1">Note</h1>
      <input
        name="description"
        placeholder="Write here"
        className="bg-slate-100 w-full rounded-xl h-56 p-2"
      />
    </div>
  );
};

export default FormRigth;
