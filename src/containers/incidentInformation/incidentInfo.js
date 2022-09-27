import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Datepicker,
  Dropdown,
  ItemDetails,
  Stepper,
  Button,
} from "../../components";
import { REASON_FOR_CLAIM } from "../../constants/mockData";
import { showToast } from "../../utils/Helper";
import { saveIncidentInfo } from "../../store/claimSlice";
import "./incidentInfo.css";

export const IncidentInfo = () => {
  const claimsData = useSelector((state) => state.claims);

  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [incidentData, setIncidentData] = useState({
    isComplete: false,
    data: {},
  });

  const { pathname } = location;

  const handleNext = () => {
    if (Object.keys(incidentData.data)?.length) {
      dispatch(
        saveIncidentInfo({
          incidentData,
        })
      );
      history("/serviceOptions");
    } else showToast("Please fill details", "error");
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const { isComplete, data } = incidentData;
    const updateData = {
      ...data,
      [name]: type === "checkbox" ? checked : value,
    };
    setIncidentData({ ...incidentData, data: updateData });
  };

  useEffect(() => {
    const keys = Object.keys(claimsData);
    if (keys?.length && keys.includes("step1")) {
      const {
        step1: { isComplete, data },
      } = claimsData;
      setIncidentData({ ...incidentData, isComplete: isComplete, data: data });
    }
     else if(!keys?.length) history("/fileClaim");
  }, [claimsData]);

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
              <h6 className="m-0 p-0 fw-bold">Incident Information</h6>
              <Stepper
                current="1"
                total="4"
                flag="Service Options"
                pathName={pathname}
              ></Stepper>
            </div>
            <div className="p-4">
              <span className="d-block fw-bold mb-3">
                Please tell us what happened
              </span>
              <div className="mb-3 w-50">
                <Datepicker
                  label="Date of Incident"
                  name="incidentDate"
                  value={incidentData.data?.incidentDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label">
                  Describe the issue or reason for your request.
                </label>
                <textarea
                  className="form-control"
                  name="describeIssue"
                  value={incidentData.data?.describeIssue}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3 w-50">
                <Dropdown
                  label="Select the reason for your claim/request."
                  options={REASON_FOR_CLAIM}
                  name="claimReason"
                  selectedValue={incidentData.data?.claimReason}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="i_agree"
                  name="isTermAndCondition"
                  checked={incidentData.data?.isTermAndCondition}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="i_agree">
                  I agree to the Terms of Use and acknowledge that I have
                  reviewed thw Fraud Notice.
                </label>
              </div>
              <div className="row align-items-center justify-content-between pt-4">
                <div className="col-auto">
                  <Button label="Back" variant="outline" />
                </div>
                <div className="col-auto">
                  <Button
                    label="Next"
                    variant="primary"
                    isDisabled={!incidentData.data?.isTermAndCondition}
                    click={handleNext}
                  />
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

