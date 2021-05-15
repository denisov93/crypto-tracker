import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="d-flex justify-content-end">
      <p className="text-info mt-3 mb-4 fs-2">Powered By: CoinGecko</p> 
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
