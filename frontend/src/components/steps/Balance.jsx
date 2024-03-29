import React, { useContext } from "react";
import { LogoBalance } from "../Logos";
import { StepContext } from "../../context/Stepcontext";

const Balance = () => {
  const { changeStepData, stepData, changeStep } = useContext(StepContext);

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-80">
      <LogoBalance />
      <h2 className="font-semibold text-xl">Set up your cash Balance</h2>
      <input
        name="balance"
        value={stepData.balance}
        onChange={(e) => {
          changeStepData(e.target.name, e.target.value);
        }}
        type="number"
        placeholder="Your cash balance"
        className="input rounded-xl bg-slate-200 p-3 w-full mt-5 max-w-xs"
      />
      <h3 className="text-xs text-[#334155]">
        How much cash do you have in your wallet?
      </h3>
    </div>
  );
};

export default Balance;
