import "./Footer.css";
import React from "react";
import appStore from "./images/Asset 6.png";
import googlePlay from "./images/Asset 5.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">Download WeSafe App Now</p>
      <div className="footer__links">
        <img src={appStore} alt="" />
        <img src={googlePlay} alt="" />
      </div>
      <p className="footer__copyright">&#169; 2021 WeSafe</p>
    </div>
  );
}

export default Footer;
