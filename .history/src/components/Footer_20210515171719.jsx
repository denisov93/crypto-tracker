import React from "react";
import logo from '../images/coinw.png';

const Footer = () => {
  let fix = {
      position: fixed,
      bottom: 0,
      left: 0
  }  
  return (
    <div className="d-flex align-items-end flex-column bd-highlight mb-3 mb-4">
      <a href="https://www.coingecko.com/">
      <img src={logo} height="50px" alt="Logo" />
      </a>
    </div>
  );
};

export default Footer;
