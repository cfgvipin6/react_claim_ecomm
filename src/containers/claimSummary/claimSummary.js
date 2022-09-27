import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, ItemDetails, Stepper } from "../../components";
import IncidentInfoView from "../incidentInformation/incidentInfoView";
import ProfileView from "../profile/profileView";

export const ClaimSummary = () => {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const storeData = useSelector((state) => state.claims);
  const { profile, step1 } = storeData;

  const handleStep = () => {
    history("/claimPlaced");
  };

  useEffect(() => {
    if (!Object.keys(storeData)?.length) history("/fileClaim");
  }, [storeData]);

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
              <Stepper
                current="4"
                total="4"
                flag="submit"
                pathName={pathname}
              ></Stepper>
            </div>
            <div className="p-4">
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block fw-bold">Claim Details</span>
                <p className="mb-0 fw-bold">
                  <Link to="/incidentInfo">
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
                  </Link>
                </p>
              </div>
              <IncidentInfoView incidentDetails={step1?.data} />
              <div className="d-flex justify-content-between py-3">
                <span className="d-block fw-bold">Fulfillment Information</span>
                <p className="mb-0">
                  <Link to="/serviceOptions">
                    Need A Different Repair Option
                  </Link>
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
                <span className="d-block fw-bold">Personal Information</span>
                <p className="mb-0 fw-bold">
                  <Link to="/profile">
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
                  </Link>
                </p>
              </div>
              <ProfileView profileDetails={profile} />
              <div className="row align-items-center justify-content-between pt-4">
                <div className="col-auto">
                  <Button label="Back" variant="outline" />
                </div>
                <div className="col-auto">
                  <Button label="Submit" variant="primary" click={handleStep} />
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

