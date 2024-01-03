import React, { useEffect, useState } from "react";

const Amount = () => {
  const [minRange, setMinRange] = useState();
  const [maxRange, setMaxRange] = useState();

  useEffect(() => {}, [minRange]);
  return (
    <div className="font-semibold mt-5">
      <h1>Amount Range</h1>
      <div className="flex gap-2 my-4">
        <input
          type="number"
          className="flex-1 input-bordered border-slate-300 rounded-xl bg-slate-200 w-2 p-4"
          onChange={(e) => setMinRange(e.target.value)}
          value={minRange}
          placeholder="0"
        />
        <input
          type="number"
          className="flex-1 input-bordered border-slate-300 rounded-xl bg-slate-200 w-2 p-4"
          onChange={(e) => setMaxRange(e.target.value)}
          value={maxRange}
          placeholder="0"
        />
      </div>
      <input type="range" className="w-full" />
    </div>
  );
};

export default Amount;
