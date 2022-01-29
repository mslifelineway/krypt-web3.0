import KryptLogo from "../assets/images/krypt-logo.png";

import "../styles/footer.css";

const menus = ["Market", "Exchange", "Tutorials", "Wallet"];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper flex">
        <div className="left">
          <img src={KryptLogo} alt="Krypt logo" className="krypt__logo" />
        </div>
        <div className="right">
          <ul className="footer__menu">
            {menus.map((menu) => (
              <li key={menu}>
                <h5>{menu}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__about">
        <p>Come join us</p>
        <span className="email">info@kryptome.com</span>
      </div>
    </div>
  );
};

export default Footer;
