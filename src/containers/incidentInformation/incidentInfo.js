import React, {useEffect, useState} from "react";
import "./incidentInfo.css";
import { useNavigate, useLocation } from 'react-router-dom'
import Stepper from "../../components/shared/stepBar/stepper";
import ItemDetails from "../../components/shared/itemDetails/itemDetails";


const IncidentInfo = () => {
const [flag, setFlag] = useState('Service Options')
const history = useNavigate()
const location = useLocation()
const { pathname } = location
 
const handleStep = () => {
    history('/ServiceOptions')
    setFlag(flag)
  }
  return (
    <>
      <div className="row bg-light py-4">
        <div className="col-8">
          <div
            className="bg-white rounded box-shadow"
            style={{overflow: 'hidden'}}
          >
            <div
              className="p-4 border-bottom"
              style={{backgroundColor: '#fcfcfc'}}
            >
              <h6 className="m-0 p-0 fw-bold">Incident Information</h6>
              <Stepper flag={flag} pathName={pathname}></Stepper>
            </div>
            <div className="p-4">
              <span className="d-block fw-bold mb-3">
                Please tell us what happened
              </span>
              <div className="mb-3 w-50">
                <label className="form-label">Date of Incident</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">
                  Describe the issue or reason for your request.
                </label>
                <textarea className="form-control"></textarea>
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">
                  Select the reason for your claim/request.
                </label>
                <select className="form-select" name="device_type">
                  <option>Select</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="i_agree"
                />
                <label className="form-check-label" htmlFor="i_agree">
                  I agree to the Terms of Use and acknowledge that I have
                  reviewed thw Fraud Notice.
                </label>
              </div>
              <div className="row align-items-center justify-content-between pt-4">
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-outline-primary py-2 px-4"
                  >
                    Back
                  </button>
                </div>
                <div className="col-auto">
                  <button type="button" className="btn btn-primary py-2 px-4" onClick={handleStep}>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ItemDetails></ItemDetails>
        </div>
      </div>
    </>
  );
};

export default IncidentInfo;
