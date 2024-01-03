import React, { useState } from "react";
import Type from "../Type";
import Category from "../Category";
import RecordForm from "../RecordForm";
import Amount from "..";
const LeftRecord = ({ openCategoryForm, setOpenCategoryForm }) => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white w-96 h-[1000px] rounded-xl mt-8 p-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Records</h1>
        <button
          className="bg-blue-600 rounded-full text-white p-2 w-80"
          onClick={() => {
            setOpen(true);
          }}
        >
          + Add
        </button>
        {open && <RecordForm open={open} closeForm={closeForm} />}
        <input
          placeholder="Search"
          className="bg-slate-200 rounded-xl border-2 w-80 p-2"
        ></input>
      </div>
      <Type />
      <Category
        openCategoryForm={openCategoryForm}
        setOpenCategoryForm={setOpenCategoryForm}
      />
      <Amount />
    </div>
  );
};
export default LeftRecord;
