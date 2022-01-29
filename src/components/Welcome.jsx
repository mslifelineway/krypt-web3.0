import { useContext } from "react";
import { TextIconButton } from "./";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/helpers";
import Loader from "./Loader";

import "../styles/welcome.css";

const gridList = [
  "Reliability",
  "Security",
  "Ethereum",
  "Web 3.0",
  "Low Fees",
  "Blockchain",
];

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransactions,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (addressTo === "" || amount === "" || keyword === "" || message === "")
      return;
    sendTransactions();
  };

  return (
    <div className="welcome flex-center">
      <div className="w__left">
        <h2 className="heading">Send Crypto across the world</h2>
        <p className="subtitle">
          Explore he crypto world. Buy and sell cryptocurrencies easily on
          Kerypto.
        </p>
        {!currentAccount && (
          <TextIconButton text="Connect Wallet" onClick={connectWallet} />
        )}
        <div className="w_grid__menus">
          {gridList.map((list) => (
            <p key={list} className="w__item">
              {list}
            </p>
          ))}
        </div>
      </div>
      <div className="w__right">
        <div className="ethereum__card-box flex-center">
          <div className="ethereum__card bg__gradient--card"></div>
          <div className="ethereum__rounded-icon">
            <SiEthereum fontSize={22} />
          </div>
          <div className="info__icon">
            <BsInfoCircle fontSize={22} />
          </div>
          <p className="card__title address">
            {shortenAddress(currentAccount)}
          </p>
          <p className="card__title">Ethereum</p>
        </div>
        <form
          className="transaction__form"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="addressTo"
            placeholder="Address to"
            className="input__field"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount (ETH)"
            className="input__field"
            min={0}
            step="any"
            onChange={handleChange}
          />
          <input
            type="text"
            name="keyword"
            placeholder="Keyword (Gif)"
            className="input__field"
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="input__field"
            placeholder="Enter Message"
            onChange={handleChange}
          ></textarea>

          <hr className="divider" />
          {isLoading ? (
            <div className="transaction__loader flex-full-center mt10">
              <Loader type="oval" />
            </div>
          ) : (
            <button type="submit" className="btn__send">
              Send Now
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Welcome;
