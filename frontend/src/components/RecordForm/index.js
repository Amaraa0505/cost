import React from "react";
import FormLeft from "../FormLeft";
import FormRigth from "../FormRight";

const RecordForm = ({ open, closeForm }) => {
  return (
    <dialog className="modal rounded-xl h-[420px] w-[500px]" open={open}>
      <div className="modal-box ">
        <div className="flex justify-between p-4">
          <h1 className="font-semibold">Add Record</h1>
          <button onClick={closeForm} className="hover:font-medium font-bold">
            X
          </button>
        </div>
        <div className="h-[1.5px] w-full bg-slate-300 rounded-full"></div>
      </div>
      <div className="flex p-3">
        <FormLeft closeForm={closeForm} />
        <FormRigth />
      </div>
    </dialog>
  );
};
export default RecordForm;
