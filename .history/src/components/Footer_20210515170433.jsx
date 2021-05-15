import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="d-flex justify-content-end text-info 50px mt-3 mb-4">
      <p className="fs-4">Powered By: CoinGecko</p> 
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
