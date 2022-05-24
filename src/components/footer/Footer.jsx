import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLine } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <div className="wave"></div>
      <img
        src={require("../../assets/img/footerlogo.png")}
        alt=""
        className="footerimg"
      />
      <div className="footer-section">
        <div className="footer-links">
          <div className="footer-header">
            <h3>About</h3>
            <AiOutlineLine />
            <ul className="footer-list">
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
            </ul>
          </div>
          <div className="footer-header">
            <h3>Help</h3>
            <AiOutlineLine />
            <ul className="footer-list">
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
            </ul>
          </div>
          <div className="footer-header">
            <h3>Developers</h3>
            <AiOutlineLine />
            <ul className="footer-list">
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Certik Audit</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
