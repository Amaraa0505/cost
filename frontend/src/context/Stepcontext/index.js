import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../UserProvider";
import { useRouter } from "next/router";
import myAxios from "../../utils/axios"; ///

const { createContext, useState, useEffect, useContext } = require("react");

export const StepContext = createContext("light");

export const StepProvider = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [step, setStep] = useState(1); //// 1, [], {}, (), ("")
  const [stepData, setStepData] = useState({
    currency_type: "",
    balance: 10,
  });

  const changeStep = () => {
    setStep((prevStep) => prevStep + 1); ///what is prevStep
  };

  const changeStepData = (key, value) => {
    setStepData((prevStep) => ({ ...stepData, [key]: value }));
  };

  const goToDashboard = async () => {
    try {
      const { data } = await myAxios.put("/users/" + user.id, {
        /////
        currency_type: stepData.currency_type,
        balance: stepData.balance,
      });
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <StepContext.Provider
      value={{ step, changeStep, stepData, changeStepData, goToDashboard }}
    >
      {children}
    </StepContext.Provider>
  );
};
