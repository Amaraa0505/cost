import React from "react";

const Type = () => {
  return (
    <div className="mt-5">
      <h1 className="font-semibold">Types</h1>
      <div className="flex gap-3">
        <input type="checkbox" />
        <p>All</p>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" />
        <p>Income</p>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" />
        <p>Expense</p>
      </div>
    </div>
  );
};

export default Type;
