import React from "react";
import geckoLogo from "../images/CoinGecko";

const Footer = () => {
  return (
    <div>
      <p className="text-end text-info mt-3 mb-4">Powered By: </p>
      <img src={require('geckoLogo')}/>
    </div>
  );
};

export default Footer;
