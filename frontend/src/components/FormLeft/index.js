import React, { useContext, useEffect, useState } from "react";
import { DashArrow } from "../Logos";
import { TransactionContext } from "../../context/TransactionContext";
import axios from "axios";
import AddIcons from "../AddIcons";
import CategoryForm from "../CategoryForm";
import RecordIcons from "./RecordIcons";

const FormLeft = ({ closeForm }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);

  const addRecord = async () => {
    /// function
    await addTransaction();
    closeForm();
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    setCategory(categories); ////()
  };

  // const [colored, setColored] = useState(<MdHomeFilled size={30} />);

  // useEffect(() => {}, [colored]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col gap-3 p-2 position: static">
      <div className="rounded-full flex gap-5 ">
        <button
          className={`flex-1 btn=md rounded-3xl border-none ${
            transactionData.transaction_type == "EXP" && ///where transaction_type is come
            "bg-[#0166FF] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "EXP"); /// ()?
          }}
        >
          Expense
        </button>
        <button
          className={`flex-1 btn-md rounded-3xl border-none ${
            transactionData.transaction_type === "INC" &&
            "bg-green-400 text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "INC");
          }}
        >
          Income
        </button>
      </div>
      <input
        type="number"
        placeholder="000,0"
        value={transactionData.amount}
        name="amount"
        onChange={(e) => {
          changeTransactionData(e.target.name, e.target.value);
        }}
        className="bg-slate-100 p-3 rounded-xl border-none"
      />

      <details className="dropdown">
        <summary className="m-1 btn">Category</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <RecordIcons
            changeTransactionData={changeTransactionData}
            category={category}
          />
        </ul>
      </details>

      <div className="flex gap-3">
        <div className="">
          <label className="label">
            <span className="mb-2">Date</span>
          </label>
          <input
            type="datetime-local"
            placeholder="oct 30, 2023"
            className="bg-slate-100 p-2 rounded-xl"
            name="updatedAt"
            onChange={(e) => {
              changeTransactionData(e.target.name, e.target.value);
              console.log("DAte", transactionData.updatedAt);
            }}
          />
        </div>
      </div>
      <button
        className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
          transactionData.transaction_type === "INC"
            ? "bg-[#228822]"
            : "bg-[#0166FF]"
        }`}
        onClick={addRecord}
      >
        Add Record
      </button>
      {open && <CategoryForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default FormLeft;
