import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import Stepper from "../../components/shared/stepBar/stepper";
import ItemDetails from "../../components/shared/itemDetails/itemDetails";

function ServiceFulfillment() {
const [flag, setFlag] = useState('Summary')
const history = useNavigate()
const location = useLocation()
const { pathname } = location
 
const handleStep = () => {
    history('/claimSummary')
    setFlag(flag)
  }
  return (
    <>
      <div className="row bg-light py-4">
        <div className="col-8">
          <div
            className="bg-white rounded box-shadow"
            style={{ overflow: "hidden" }}
          >
            <div
              className="p-4 border-bottom"
              style={{ backgroundColor: "#fcfcfc" }}
            >
              <h6 className="m-0 p-0 fw-bold">Service Fulfillment</h6>
              <Stepper  flag={flag} pathName={pathname}></Stepper>
            </div>
            <div className="p-4">
              <span className="d-block fw-bold mb-3">Mail in Repair</span>
              <p>
                Once your device is repaired it will be shipped to the address
                provided below <br />
                via <b className="text-primary">standard shipping</b> (1
                business day)
              </p>
              <ul className="list-inline pt-4">
                <li className="list-inline-item">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="possession_device"
                      id="possession_device_y"
                      checked="checked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="possession_device_y"
                    >
                      Same as policy
                    </label>
                  </div>
                </li>
                <li className="list-inline-item ms-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="possession_device"
                      id="possession_device_n"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="possession_device_n"
                    >
                      New Address
                    </label>
                  </div>
                </li>
              </ul>
              <p>
                <b>Steve Smith</b>
                <br />
                123 Main Street
                <br />
                Atlanta, Georga 30031
                <br />
                United States
                <br />
                steve.smith@gmail.com
              </p>
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
                  <button type="button" className="btn btn-primary py-2 px-4" onClick={handleStep}>
                    Next
                  </button>
                  {/* <button [routerLink]="['/summary']" type="button"
                            className="btn btn-primary py-2 px-4">Next</button> */}
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
}

export default ServiceFulfillment;
