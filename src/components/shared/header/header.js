import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PGH from "../../../assets/images/pgh-logo.svg";
import { NAV_MENU } from "../../../constants/mockData";
import "./header.css";

export const Header = () => {
  const history = useNavigate();
  const [selectedItem, setSelectedItem] = useState("Home");

  const navBarClickHandler = (item) => {
    setSelectedItem(item.label);
    console.log("route", `${item.url}`);
    history(`${item.url}`);
  };
  return (
    <>
      <header className="bg-white py-2 border-bottom border-light">
        <div className="container-fluid d-flex py-1">
          <span onClick={() => history("/")} className="c-pointer">
            <img src={PGH} alt="pgh" />
          </span>
          <ul className="nav ms-auto mb-0">
            {NAV_MENU.map((item) => (
              <li
                className={`nav-item c-pointer ${
                  item.label === "Profile" &&
                  "d-flex align-items-center"
                }`}
                key={item.label}
                onClick={() => navBarClickHandler(item)}
              >
                {item.label !== "Profile" ? (
                  <span
                    className={`nav-link ${
                      selectedItem === item.label && "text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                ) : (
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="225.000000pt"
                    height="225.000000pt"
                    viewBox="0 0 225.000000 225.000000"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "50px",
                      height: "40px",
                    }}
                  >
                    <g
                      transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
                      fill={
                        selectedItem === item.label ? "text-primary" : "#000000"
                      }
                      stroke="none"
                    >
                      <path
                        d="M1028 1860 c-282 -44 -507 -257 -562 -532 -85 -418 232 -808 658
-808 183 0 342 66 472 195 89 89 140 171 174 280 110 360 -109 755 -472 849
-75 19 -200 27 -270 16z m227 -45 c210 -44 397 -208 472 -417 24 -64 27 -88
27 -203 1 -147 -16 -214 -80 -321 -39 -66 -101 -144 -113 -144 -5 0 -13 25
-19 56 -26 126 -116 239 -240 297 -63 30 -74 32 -177 32 -103 0 -114 -2 -177
-32 -124 -58 -214 -171 -240 -297 -6 -31 -14 -56 -19 -56 -13 0 -97 112 -129
172 -68 127 -87 297 -50 442 85 334 412 541 745 471z m5 -754 c69 -26 133 -74
174 -130 46 -63 64 -107 74 -181 l9 -60 -46 -29 c-122 -79 -230 -106 -384 -98
-117 6 -178 23 -280 81 l-72 41 3 50 c4 68 59 182 113 235 113 110 268 144
409 91z"
                      />
                      <path
                        d="M1075 1570 c-16 -5 -47 -24 -69 -42 -99 -81 -100 -229 -3 -315 134
-118 340 -23 340 157 0 75 -36 139 -97 175 -49 28 -124 39 -171 25z m163 -67
c75 -60 92 -153 41 -227 -37 -54 -90 -79 -155 -74 -58 5 -93 25 -128 72 -32
42 -30 149 3 195 54 75 167 91 239 34z"
                      />
                    </g>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};
