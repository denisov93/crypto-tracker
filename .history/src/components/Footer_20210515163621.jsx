import React from "react";

const Footer = () => {
    const logo = require("../images/coing.png");
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img alt="sd" height="600px" id="img" src={logo}/>
    </div>
  );
};

export default Footer;
