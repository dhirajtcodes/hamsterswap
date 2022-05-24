import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import DropDown from "../Dropdown";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Wallet = () => {
  const [swichToggle, setSwitchToggle] = useState(false);

  const items = [
    {
      name: "Doge",
    },
    {
      name: "Bitcoin",
    },
    {
      name: "Simbhu",
    },
  ];

  console.log("switchToggle", swichToggle);

  return (
    <div className="wallet-container">
      <div className="wallet-inputs">
        <div className="wallet-header">
          <p
            style={{
              backgroundColor: `${swichToggle ? "#faca51" : ""}`,
            }}
            onClick={() => setSwitchToggle(!swichToggle)}
          >
            ExChange
          </p>
          <p
            style={{
              backgroundColor: `${swichToggle ? "" : "#faca51"}`,
            }}
            onClick={() => setSwitchToggle(!swichToggle)}
          >
            Liquidity
          </p>
        </div>
        <div className="wallet-body">
          <div className="wallet-body-text">
            <p>Trade token in an instant</p>
            <span>
              <AiOutlineSetting />
              <BsClockHistory />
            </span>
          </div>
          <div className="wallet-input">
            <label htmlFor="form">Form</label>
            <span>
              <input type="text" defaultValue={"0.00"} />
              <DropDown name="Select" items={items} />
            </span>
          </div>
          <span className="wallet-arrow">
            <BsFillArrowDownCircleFill />
          </span>
          <div className="wallet-input">
            <label htmlFor="form">To</label>
            <span>
              <input
                type="text"
                defaultValue={"0.00"}
                style={{ width: "13rem" }}
              />
              <DropDown name="Select Currency" items={items} />
            </span>
          </div>
          <span className="wallet-bottom-text">
            <p>Slippage Tolerance</p>
            <p>0.5%</p>
          </span>
          <button className="wallet-button">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
