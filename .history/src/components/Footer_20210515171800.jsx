import React from "react";
import logo from '../images/coinw.png';

const Footer = () => {
  let fix = {
      position: fixed,
      bottom: 0,
      left: 0
  }  
  return (
    <div className={fix}>
      <a href="https://www.coingecko.com/">
      <img src={logo} height="50px" alt="Logo" />
      </a>
    </div>
  );
};

export default Footer;
