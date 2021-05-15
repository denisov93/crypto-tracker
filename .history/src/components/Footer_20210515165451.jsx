import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="inline">
      <p className="text-info mt-3 mb-4">Powered By: </p>
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
