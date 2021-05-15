import React from "react";

const Footer = () => {
    
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img alt="sd" height="600px" id="img" src={require("/public/logo.png")}/>
    </div>
  );
};

export default Footer;
