import React from "react";

const Base = () => {
  return (
    <div className="bg-white rounded-xl w-[1200px] ml-[120px] p-6 flex flex-col gap-4">
      <h1 className="font-bold">Last Records</h1>
      <div className="bg-gray-400 h-[1.5px] w-full rounded-full"></div>
      <div className="flex">
        <div>
          <p>Lending & Renting</p>
          <p className="text-gray-400">3 hours ago</p>
        </div>

        <p className="text-green-600 ml-[950px]">- 1,000</p>
      </div>
    </div>
  );
};

export default Base;
