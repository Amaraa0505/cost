import React, { useState } from "react";

const TopRecord = () => {
  const [changeDate, setChangeDate] = useState(1);

  const prev = () => {
    setChangeDate(changeDate - 1);
  };
  const next = () => {
    setChangeDate(changeDate + 1);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex gap-5 ">
          <button
            className="btn bg-[#E5E7EB] rounded-xl p-1 hover:bg-slate-100"
            onClick={prev}
          >
            {"<"}
          </button>
          <button>
            {changeDate === 0 && "Last 10 days"}
            {changeDate === 1 && "Last 30 days"}
            {changeDate === 2 && "Yesterday"}
            {changeDate === 3 && "Today"}
          </button>
          <button
            className="btn bg-[#E5E7EB] rounded-xl p-1 hover:bg-slate-100"
            onClick={next}
          >
            {">"}
          </button>
        </div>
        <div>
          <button className="bg-slate-200 rounded-xl border-spacing-y-1 p-2 font-semibold">
            Newest First
          </button>
        </div>
      </div>
      <div className="mt-3 flex justify-between bg-white rounded-xl p-3">
        <div className="flex gap-2 ">
          <input type="checkbox" />
          <p>Select All</p>
        </div>
        <p className="text-gray-200 font-semibold">- 35,500</p>
      </div>
    </div>
  );
};

export default TopRecord;
