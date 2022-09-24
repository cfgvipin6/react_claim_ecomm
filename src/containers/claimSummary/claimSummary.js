import React, {useState} from "react";
import Stepper from "../../components/shared/stepBar/stepper";
import ItemDetails from "../../components/shared/itemDetails/itemDetails";
import { useNavigate, useLocation } from 'react-router-dom'

function ClaimSummary() {
const [flag, setFlag] = useState('submit')
const history = useNavigate()
const location = useLocation()
const { pathname } = location

const handleStep = () => {
  history('/claimPlaced')
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
              <h6 className="m-0 p-0 fw-bold">Summary</h6>
              <Stepper  flag={flag} pathName={pathname}></Stepper>
            </div>
            <div className="p-4">
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block fw-bold">Claim Details</span>
                <p className="mb-0 fw-bold">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>{" "}
                    Edit
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Date of incident</span>
                <p className="mb-0">03/10/2019</p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Reason for claim</span>
                <p className="mb-0">My device are not functioning.</p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Description</span>
                <p className="mb-0">Demo text here.</p>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span className="d-block fw-bold">Fulfillment Information</span>
                <p className="mb-0">
                  <a href="">Need A Different Repair Option</a>
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block fw-bold">Sent To Us</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span className="d-block">Delivery Address</span>
                <p className="mb-0 text-end">
                  123 Main Street <br />
                  Atlanta, Georga 30031
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block fw-bold">Personal Informaton</span>
                <p className="mb-0 fw-bold">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>{" "}
                    Edit
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Full Name</span>
                <p className="mb-0">Manjeet Singh</p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Address</span>
                <p className="mb-0 text-end">
                  123 Main Street <br />
                  Atlanta, Georga 30031
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Email Address</span>
                <p className="mb-0">manjeet.3.singh@coforge.com</p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block">Contact Number</span>
                <p className="mb-0">+91-9602304602</p>
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
                  <button type="button" className="btn btn-primary py-2 px-4" onClick={handleStep}>
                    Submit
                  </button>
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

export default ClaimSummary;
