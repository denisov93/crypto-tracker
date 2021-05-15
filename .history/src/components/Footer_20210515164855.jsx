import React from "react";

const Footer = () => {
    
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <Image alt="sd" height="600px" id="img" src={require('../images/logo.png')}/>
    </div>
  );
};

export default Footer;
