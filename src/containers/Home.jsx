import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transactions,
  Welcome,
} from "../components";
import { TransactionContext } from "../context/TransactionContext";

import "../styles/home.css";

const Home = () => {
  const { isPageLoading } = useContext(TransactionContext);
  useEffect(() => {
    isPageLoading
      ? ReactDOM.render(<Loader />, document.getElementById("loading"))
      : ReactDOM.render("", document.getElementById("loading"));
  }, [isPageLoading]);

  return (
    <div className="home bg__home">
      <div className="homeContent__wrapper">
        <div className=" header__wrapper">
          <Navbar />
          <Welcome />
          <Services />
        </div>
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
