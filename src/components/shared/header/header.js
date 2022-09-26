import React from "react";
import { useNavigate } from "react-router-dom";
import PGH from "../../../assets/images/pgh-logo.svg";
import PROFILE from "../../../assets/images/profileIcon.svg";
import "./header.css";

const navMenu = ["Home", "Account", "My Devices", "Tech services"];

const Header = () => {
  const history = useNavigate();
  return (
    <>
      <header className="bg-white py-2 border-bottom border-light">
        <div className="container-fluid d-flex py-1">
          <span onClick={() => history("/")} className="c-pointer">
            <img src={PGH} alt="pgh" />
          </span>
          <ul className="nav ms-auto mb-0">
            {navMenu.map((item) => (
              <li className="nav-item" key={item}>
                <span className="nav-link">{item}</span>
              </li>
            ))}
            <li className="nav-item">
              <span className="nav-link text-primary">File a Claim</span>
            </li>
            <li
              className="nav-item d-flex align-items-center justify-content-center"
              onClick={() => history("/profile")}
            >
              <img
                src={PROFILE}
                alt="profile"
                style={{ width: "50px", height: "40px" }}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
