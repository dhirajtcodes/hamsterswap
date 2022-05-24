import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={require("../../assets/img/logo.png")}
        alt="hamster swap"
        width={210}
        height={70}
      />
      <div className="nav-links">
        <ul>
          <li>
            <Link to="#">Exchange</Link>
          </li>
          <li>
            <Link to="#">Liquidity</Link>
          </li>
          <li>
            <Link to="#">Farms</Link>
          </li>
          <li>
            <Link to="#">Pools</Link>
          </li>
          <li>
            <Link to="#">Launch</Link>
          </li>
          <li>
            <Link to="#">NFT</Link>
          </li>
          <li>
            <span className="btn">$0.0000</span>
          </li>
          <li>
            <span className="btn btn-primary">Connect Wallet</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
