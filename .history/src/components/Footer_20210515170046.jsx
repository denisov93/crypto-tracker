import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
    
  return (
    <div className="d-flex justify-content-end  text-info mt-3 mb-4">
      <div> Powered By: </div> 
      <img src={logo} height="50px" alt="Logo" />
    </div>
  );
};

export default Footer;
