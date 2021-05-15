import React from "react";
import logo from '../images/coinw.png';

const Footer = () => {
  
  return (
    <div className="bottom">
      <p>Powered By:</p>  
      <a href="https://www.coingecko.com/">
      <img src={logo} height="50px" alt="Logo" />
      </a>
    </div>
  );
};

export default Footer;
