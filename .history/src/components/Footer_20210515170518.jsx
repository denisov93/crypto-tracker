import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="d-flex justify-content-end ">
      <p className="fs-2">Powered By: CoinGecko</p> 
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
