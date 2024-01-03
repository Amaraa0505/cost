import React from "react";
import TopRecord from "../TopRecord";
import Today from "../Today";
import Yesterday from "../Yesterday";

const RightRecord = () => {
  return (
    <div className="w-[800px] h-[900px] rounded-x  mt-8">
      <TopRecord />
      <Today />
      <Yesterday />
    </div>
  );
};

export default RightRecord;
