import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img src={require('images/CoinGecko.png')}/>
    </div>
  );
};

export default Footer;
