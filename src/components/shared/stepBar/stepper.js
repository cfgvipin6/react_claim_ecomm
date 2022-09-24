import React from "react";
import "./stepper.css";
import ConfirmImg from "../../../assets/images/confirm-icon.png";

const Stepper = ({flag, pathName}) => {
  const [flagData, setFlagData] =React.useState(flag)
console.log(pathName,flag,'pathname')
  return (
    <>
      <div className="row justify-content-between py-3">
        <div className="col-auto">
          <p className="mb-0 text-muted">Step 1 of 4</p>
        </div>
        <div className="col-auto">
          <p className="mb-0 text-muted">Next : {flagData}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between steps-bar mb-2">
        <span className= {flag === 'Service Options'  ? 'current' : "active"}>
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span className = {flag === 'Service Fulfillment' ? 'current' : flag === 'Summary' ? 'active': flag === 'submit' ? 'active' : '' }>
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span className = {flag === 'Summary' ? 'current':  pathName === '/claimSummary' ? 'active': ''}>
          <img src={ConfirmImg} alt="confirm" />
        </span>
        <span className = {flag === 'submit' ? 'current' : pathName === '/claimPlaced' ? 'active' : ''}>
          <img src={ConfirmImg} alt="confirm" />
        </span>
      </div>
    </>
  );
};

export default Stepper;
