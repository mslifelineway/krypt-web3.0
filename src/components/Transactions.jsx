import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import "../styles/transactions.css";
import TransactionCard from "./TransactionCard";

const transactionsData = [
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
  {
    from: "0xebsdf",
    to: "0E299asddf",
    amount: "0.0002 Eth",
    date: "29 Jan 2022, 02:30 PM",
  },
];

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="transactions">
      {transactions.length === 0 ? (
        <h4 className="no__transactions">No transactions found</h4>
      ) : (
        <>
          <h4>Latest Transactions</h4>
          <div className="transactions__details">
            {transactions.map((transaction, i) => (
              <div key={`${transaction.from}_${transaction.to}_${i}`}>
                <TransactionCard {...transaction} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Transactions;
