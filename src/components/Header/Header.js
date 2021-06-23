import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <h4>WeSafe</h4>
        <button className="header__button">
          <p>English</p>
        </button>
      </div>
      <div className="header__bottom">
        <div className="header__avatar">
          <img src="" alt="" />
        </div>
        <p className="header__avatarTitle">Mufaddal Arthuna</p>
        <p className="header__avatarInfo">
          25 year Male from Pune, Maharashtra
        </p>
      </div>
    </div>
  );
}

export default Header;
