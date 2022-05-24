import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

const BottomContainer = () => {
  return (
    <div className="bottom-container">
      <p>Hamsterswap 2022. All Right Reserved</p>
      <span>
        <BsInstagram />
        <BsTwitter />
        <FaTelegram />
      </span>
    </div>
  );
};

export default BottomContainer;
