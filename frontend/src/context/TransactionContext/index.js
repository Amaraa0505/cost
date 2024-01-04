import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import myAxios from "../../utils/axios";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "buuz",
    amount: 1000,
    transaction_type: "EXP",
    category_id: "",
    updatedat: "",
    user_id: "9f58c108-63b9-482e-9ef8-54bb33c2994a",
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
        user_id: "2b7d99a2-e325-4b86-aff0-69c16cfaf902",
      });
      console.log("FF");
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTransactions = async () => {
    console.log("working");
    try {
      const {
        data: { transactions },
      } = await myAxios.get(
        "/transactions/06abd39d-0523-4749-b99e-28dc147ad222"
      );
      toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
      setTransactions(transactions);
    } catch (error) {
      toast.error("TTT guilgee nemhed aldaa garlaa");
    }
  };

  useEffect(() => {
    console.log("ter");
    getTransactions();
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
