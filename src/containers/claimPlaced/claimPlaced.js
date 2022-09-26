import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BarclayImg from "../../assets/images/barclay-card.png";
import ConfirmImg from "../../assets/images/confirm-icon.png";
import { ItemDetails, Button } from "../../components";
import IncidentInfoView from "../incidentInformation/incidentInfoView";
import ProfileView from "../profile/profileView";

function ClaimPlaced() {
  const history = useNavigate();
  const storeData = useSelector((state) => state.claims);
  const { profile, step1 } = storeData;

  const goToDashboard = () => history("/thanks");

  return (
    <>
      <div className="row bg-light py-4">
        <div className="col-12">
          <div className="alert alert-success mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>{" "}
            Your Claim Has Been Successfully Submitted.
          </div>
        </div>
        <div className="col-8">
          <div
            className="bg-white rounded box-shadow"
            style={{ overflow: "hidden" }}
          >
            <div className="p-4">
              <div>
                <span className="d-block fw-bold mb-2">
                  Claim number: DX54343434RD3
                </span>
                <p className="text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available. There are many variations of passages of Lorem
                  Ipsum available
                </p>
                <p className="text-muted">
                  But the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.{" "}
                </p>
              </div>
              <div className="border-bottom py-3">
                <span className="d-block fw-bold">Deductible Fee</span>
              </div>
              <div className="py-3 text-center">
                <span className="d-block text-center mb-3 fw-bold">
                  <img
                    src={ConfirmImg}
                    alt="confirm"
                    width="20"
                    className="me-2 align-middle d-inline-block position-relative"
                    style={{ top: "-1px" }}
                  />{" "}
                  Thank you - your payment details have been confirmed
                </span>
                <img
                  src={BarclayImg}
                  alt="barclay"
                  width="200"
                  className="mb-3"
                />
                <p className="text-muted">
                  But the majority have suffered alteration in{" "}
                  <a href="">some form</a>.
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom py-3">
                <span className="d-block fw-bold">Claim Details</span>
              </div>
              <IncidentInfoView incidentDetails={step1?.data} />
              {/* <div className="d-flex justify-content-between border-bottom py-3">
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
              </div> */}
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
                <span className="d-block fw-bold">Personal Informaton</span>
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
              <div className="border-bottom py-3">
                <span className="d-block fw-bold mb-2">Claim History</span>
                <p className="mb-0 d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0d6efd"
                    className="bi bi-patch-check-fill mt-1 me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <span>
                    Claim Submitted <br />
                    Date Reported Aug 2nd, 2019
                  </span>
                </p>
              </div>
              <div className="pt-4">
                <Button
                  label="Go to Claim Dashboard"
                  variant="primary"
                  click={goToDashboard}
                />
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

export default ClaimPlaced;
