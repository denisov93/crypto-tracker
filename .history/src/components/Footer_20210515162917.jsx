import React from "react";

const Footer = () => {
    const logo = require('../images/CoinGecko');
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img src={logo}/>
    </div>
  );
};

export default Footer;
