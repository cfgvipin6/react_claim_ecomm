import React from "react";
import "./itemDetails.css";
import { useSelector } from "react-redux";
import {addYears} from '../../../utils/Helper';

import Shopping from "../../../assets/images/shopping.png";
export const ItemDetails = () => {
  const claimsData = useSelector((state) => state.claims);

  return (
    <div className="bg-white rounded box-shadow p-4 policy-asset">
      <div className="row flex-nowrap align-items-center">
        <div className="col-auto">
          <img src={Shopping} alt="shopping" style={{ maxWidth: "70px" }} />
        </div>
        <div className="col">
          <h5 className="m-0">{claimsData?.brand}</h5>
          <p>{claimsData?.modal}</p>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy Number</label>
        </div>
        <div className="col-auto">
          <span>2344-9999-1111</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Serial Number</label>
        </div>
        <div className="col-auto">
          <span>{claimsData?.serialNo}</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy Start Date</label>
        </div>
        <div className="col-auto">
          <span>{claimsData?.purchaseDate}</span>
        </div>
      </div>
      <div className="row flex-nowrap align-items-center justify-content-between border-bottom g-0 py-3">
        <div className="col-auto">
          <label>Policy End Date</label>
        </div>
        <div className="col-auto">
          <span>
            {claimsData?.purchaseDate
              ? addYears(claimsData?.purchaseDate, 3)
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};
