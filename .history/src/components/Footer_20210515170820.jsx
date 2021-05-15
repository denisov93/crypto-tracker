import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="d-flex align-items-end flex-column bd-highlight mb-3 mb-4">
      <p className="text-info fs-2">Powered By:</p> 
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
