import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Datepicker, Dropdown, RadioBtn, Button } from "../../components";
import {
  DEVICE_TYPE,
  STILL_POSSESSION,
  DAMAGE_DEVICE,
} from "../../constants/mockData";
import { claimAdded } from "../claimSlice";
import { showToast } from "../../utils/Helper";
import "./fileClaim.css";

const FileClaim = () => {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const claimsData = useSelector((state) => state.claims);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log("=========", name, value);
    setData({ ...data, [name]: value });
  };

  const handleEvent = () => {
    if (Object.keys(data)?.length) {
      dispatch(
        claimAdded({
          data,
        })
      );

      history("/incidentInfo");
    } else {
      showToast("Please fill details", "error");
    }
  };

  useEffect(() => {
    if (Object.keys(claimsData)?.length) {
      const {
        purchaseDate,
        damagedDevice,
        brand,
        deviceType,
        deviceNickName,
        modal,
        purchasePrice,
        serialNo,
        stillPossession,
      } = claimsData;
      const prevData = {
        ...{
          purchaseDate,
          damagedDevice,
          brand,
          deviceType,
          deviceNickName,
          modal,
          purchasePrice,
          serialNo,
          stillPossession,
        },
      };
      // console.log("prevData", prevData);
      setData({ ...data, ...prevData });
    }
  }, [claimsData]);
  return (
    <div className="w-75 mx-auto py-4">
      <div className="row g-0 py-4 align-items-center border-bottom">
        <div className="col">
          <h5 className="m-0 p-0">Claim Pre-Qualification</h5>
        </div>
        <div className="col-auto">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-text-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>{" "}
            Claims History & Status
          </a>
        </div>
      </div>
      <div className="py-4 border-bottom">
        <p>
          To get started with the claim process, please answer the following
          questions.
        </p>
        <span className="d-block fw-bold mb-3">
          Do you still have possession of the device?
        </span>
        {STILL_POSSESSION.map((item, i) => (
          <RadioBtn
            key={`${item}_${i}`}
            name="stillPossession"
            item={item}
            selectedValue={data?.stillPossession}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="py-4 border-bottom">
        <span className="d-block fw-bold mb-3">
          Is your device damaged in some way?
        </span>
        {DAMAGE_DEVICE.map((item, i) => (
          <RadioBtn
            key={`${item}_${i}`}
            name="damagedDevice"
            item={item}
            selectedValue={data?.damagedDevice}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="py-4">
        <span className="d-block fw-bold mb-3">
          Confirm the device category, Brand and Model or select this
          information below.
        </span>
        <div className="mb-3 w-50">
          <Dropdown
            label="Device Type"
            onChange={handleChange}
            options={DEVICE_TYPE}
            name="deviceType"
            selectedValue={data?.deviceType}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Brand</label>
          <input
            type="text"
            name="brand"
            className="form-control"
            value={data?.brand}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Model</label>
          <input
            type="text"
            name="modal"
            className="form-control"
            value={data?.modal}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Device Nickname</label>
          <input
            type="text"
            name="deviceNickName"
            className="form-control"
            value={data?.deviceNickName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Serial Number (Optional)</label>
          <input
            type="text"
            name="serialNo"
            className="form-control"
            value={data?.serialNo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <label className="form-label">Purchase Price, $</label>
          <input
            type="number"
            name="purchasePrice"
            className="form-control"
            value={data?.purchasePrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 w-50">
          <Datepicker
            label="Purchase Date"
            name="purchaseDate"
            value={data?.purchaseDate}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <p className="text-start py-3">
            Upon completion you'll be taken to our Assurant claims site.
          </p>
          <Button label="Start A Claim" variant="primary" click={handleEvent} />
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
