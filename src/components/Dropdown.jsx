import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = (props: any) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.name);

  return (
    <div className="dropdown-select single-select">
      <div
        className="dropdown-options"
        style={{ display: `${open ? "" : "none"}` }}
      >
        {props.items.map((value, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                setName(value.name);
                setOpen(false);
              }}
            >
              <p>{value.name}</p>
            </span>
          );
        })}
      </div>
      <div
        className={`w-auto ${
          open ? "dropdown-heading open" : "dropdown-heading"
        }`}
        onClick={() => setOpen(!open)}
      >
        <p>{name}</p>
        <span>
          <IoIosArrowDown />
        </span>
      </div>
    </div>
  );
};

export default DropDown;
