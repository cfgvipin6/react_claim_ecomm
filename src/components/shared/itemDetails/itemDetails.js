import React from "react";
import "./itemDetails.css";

import Shopping from "../../../assets/images/shopping.png";
export const ItemDetails = () => {
  return (
    <div className="bg-white rounded box-shadow p-4 policy-asset">
      <div className="row flex-nowrap align-items-center">
        <div className="col-auto">
          <img src={Shopping} alt="shopping" style={{ maxWidth: "70px" }} />
        </div>
        <div className="col">
          <h5 className="m-0">Diane's Macbook</h5>
          <p>MacBook Pro</p>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy Number</label>
        </div>
        <div className="col-auto">
          <span>00454-45454-45454</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Serial Number</label>
        </div>
        <div className="col-auto">
          <span>435345435345232654</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy Start Date</label>
        </div>
        <div className="col-auto">
          <span>08/03/2019</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy End Date</label>
        </div>
        <div className="col-auto">
          <span>08/03/2023</span>
        </div>
      </div>
    </div>
  );
};
