import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import myAxios from "../../utils/axios";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "",
    amount: 100,
    transaction_type: "",
    category_id: "",
    updatedat: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await myAxios.post("/transactions", {
        ...transactionData,
        user_id: user.id,
      });
      console.log("FF");
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  // const getTransactions = async () => {
  //   console.log("working");
  //   try {
  //     const {
  //       data: { transactions },
  //     } = await myAxios.get("/transactions/" + user.id);
  //     toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
  //     setTransactions(transactions);
  //   } catch (error) {
  //     toast.error("TTT guilgee nemhed aldaa garlaa");
  //   }
  // };

  useEffect(() => {
    console.log("ter");
    // getTransactions();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transactionData,
        changeTransactionData,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
