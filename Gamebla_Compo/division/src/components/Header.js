import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <img src="/Img/Logo.png" alt="logo" />
      </div>
      <div className="btnWrap">
        <img className="search" src="/IMG/icons/search.png" alt="" />
        <div className="alarm">
          <img src="/Img/icons/alarm.png" alt="" />
          <div className="new"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
