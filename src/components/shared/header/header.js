import React from "react";
import './header.css';
import PGH from '../../../assets/images/pgh-logo.svg';
const navMenu = ['Home','Account','My Devices', 'Tech services'] 

const Header = () => {
  return (
    <>
      <header className="bg-white py-2 border-bottom border-light">
        <div className="container-fluid d-flex py-1">
          <span >
            <img src={PGH} alt="pgh" />
          </span>
          <ul className="nav ms-auto mb-0">
            {navMenu.map(item => (
            <li className="nav-item" key={item}>
              <span className="nav-link">{item}</span>
            </li> ))}
            <li className="nav-item">
              <span className="nav-link text-primary">File a Claim</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
