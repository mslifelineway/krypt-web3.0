import React, { useEffect, useState } from "react";

import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      setIsPageLoading(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      }
      setTimeout(() => {
        setIsPageLoading(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setIsPageLoading(false);
      }, 1000);
      throw new Error("No ethereum object.");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length) setCurrentAccount(accounts[0]);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  const sendTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount); //since amount is decimal value so need to convert into GWEI
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000000000000 wei, 21000 GWEI, 0.000021 ETHER
            value: parsedAmount._hex,
          },
        ],
      }); // this will send the transaction from one address to another address, so we also need to call a function to store this transaction
      //transactionHas --> will take some time to do the transaction
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(true);
      const transactionCount = await transactionContract.getTransactionsCount();
      setTransactionCount(transactionCount.toNumber());
      await getAllTransactions();
      setIsLoading(false);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const transactionContract = getEthereumContract();
      const availableTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          keyword: transaction.keyword,
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      setTransactions(structuredTransactions);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionsCount();
      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      throw new Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExists();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransactions,
        isLoading,
        isPageLoading,
        transactionCount,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
