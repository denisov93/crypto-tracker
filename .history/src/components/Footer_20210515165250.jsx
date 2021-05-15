import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Footer;
