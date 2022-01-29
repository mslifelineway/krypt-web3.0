import React from "react";
import useFetch from "../hooks/useFetch";
import { DUMMY_GIPHY_URL } from "../utils/constants";
import { shortenAddress } from "../utils/helpers";

import "../styles/transaction_card.css";

const TransactionCard = ({
  addressFrom,
  addressTo,
  timestamp,
  amount,
  message,
  keyword,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div className="transactionCard flex-full-center">
      <div className="transaction__card-content">
        <h6>From: {shortenAddress(addressFrom)}</h6>
        <h6>To: {shortenAddress(addressTo)}</h6>
        <h6>Amount: {amount} ETH</h6>
        {message && <p></p>}
        <img src={gifUrl || DUMMY_GIPHY_URL} alt="keyword giphy" />
        <h6 className="transactions__date">{timestamp}</h6>
      </div>
    </div>
  );
};

export default TransactionCard;
