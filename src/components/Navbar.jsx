import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TextIconButton } from "./";
import KryptLogo from "../assets/images/krypt-logo.png";
import "../styles/navbar.css";

const menus = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
  const [toogleMenu, setToggleMenu] = useState(false);

  const RenderMenus = () => {
    return (
      <>
        {menus.map((menu) => {
          return (
            <li key={menu} className="nav__menu-item">
              <a href={`/${menu.toLowerCase()}`}>{menu}</a>
            </li>
          );
        })}
        <TextIconButton text="Login" link="/login" />
      </>
    );
  };

  return (
    <div className="navbar flex">
      <div className="nav__logo grow-1 flex-full-center">
        <img src={KryptLogo} alt="Krypt logo" className="krypt__logo" />
      </div>
      <div className="nav__right flex-full-center">
        <div className="desktop__menus">
          <ul className="nav__menus flex flex-row">
            <RenderMenus />
          </ul>
        </div>
        <div className="mobile__menus">
          {toogleMenu ? (
            <>
              <AiOutlineClose
                className="react__icon ml20"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="nav__menus flex flex-row">
                <RenderMenus />
              </ul>
            </>
          ) : (
            <AiOutlineMenu
              className="react__icon ml20"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
