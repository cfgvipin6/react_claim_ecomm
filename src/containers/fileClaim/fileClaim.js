import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Datepicker, Dropdown, RadioBtn, Button } from "../../components";
import {
  DEVICE_TYPE,
  STILL_POSSESSION,
  DAMAGE_DEVICE,
} from "../../constants/mockData";
import { claimAdded } from "../../store/claimSlice";
import { showToast } from "../../utils/Helper";
import "./fileClaim.schema.js";
import { useFormik } from "formik";
import { fileClaimValidate } from "./fileClaim.schema";

const initialValues = {
  purchaseDate: "",
  damagedDevice: "",
  brand: "",
  deviceType: "",
  deviceNickName: "",
  modal: "",
  purchasePrice: "",
  serialNo: "",
  stillPossession: "",
};
export const FileClaim = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const claimsData = useSelector((state) => state.claims);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
    isValidating,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: fileClaimValidate,
    onSubmit: (values, action) => {
      console.log("values", values);
      handleEvent(values);
      action.resetForm();
    },
  });

  const handleEvent = (data) => {
    dispatch(
      claimAdded({
        data,
      })
    );
    history("/incidentInfo");
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
      setValues({ ...values, ...prevData });
    }
  }, [claimsData]);
  return (
    <div className="w-75 mx-auto py-4">
      <form onSubmit={handleSubmit}>
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
              selectedValue={values?.stillPossession}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          {errors.stillPossession && touched.stillPossession ? (
            <p className="form-error">{errors.stillPossession}</p>
          ) : (
            ""
          )}
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
              selectedValue={values?.damagedDevice}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          {errors.damagedDevice && touched.damagedDevice ? (
            <p className="form-error">{errors.damagedDevice}</p>
          ) : (
            ""
          )}
        </div>
        <div className="py-4">
          <span className="d-block fw-bold mb-3">
            Confirm the device category, Brand and Model or select this
            information below.
          </span>
          <div className="mb-3 w-50">
            <Dropdown
              label="Device Type"
              options={DEVICE_TYPE}
              name="deviceType"
              selectedValue={values?.deviceType}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.deviceType && touched.deviceType ? (
              <p className="form-error">{errors.deviceType}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Brand</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              value={values?.brand}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.brand && touched.brand ? (
              <p className="form-error">{errors.brand}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Model</label>
            <input
              type="text"
              name="modal"
              className="form-control"
              value={values?.modal}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.modal && touched.modal ? (
              <p className="form-error">{errors.modal}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Device Nickname</label>
            <input
              type="text"
              name="deviceNickName"
              className="form-control"
              value={values?.deviceNickName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.deviceNickName && touched.deviceNickName ? (
              <p className="form-error">{errors.deviceNickName}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Serial Number (Optional)</label>
            <input
              type="text"
              name="serialNo"
              className="form-control"
              value={values?.serialNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.serialNo && touched.serialNo ? (
              <p className="form-error">{errors.serialNo}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <label className="form-label">Purchase Price, $</label>
            <input
              type="number"
              name="purchasePrice"
              className="form-control"
              value={values?.purchasePrice}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.purchasePrice && touched.purchasePrice ? (
              <p className="form-error">{errors.purchasePrice}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3 w-50">
            <Datepicker
              label="Purchase Date"
              name="purchaseDate"
              value={values?.purchaseDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.purchaseDate && touched.purchaseDate ? (
              <p className="form-error">{errors.purchaseDate}</p>
            ) : (
              ""
            )}
          </div>
          <div className="text-center">
            <p className="text-start py-3">
              Upon completion you'll be taken to our Assurant claims site.
            </p>
            {/* <Button
              type="submit"
              label="Start A Claim"
              variant="primary"
              click={handleEvent}
            /> */}
            <button
              type="submit"
              label="Start A Claim"
              disabled={isValidating || isSubmitting}
              style={{
                cursor:
                  isValidating || isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              Start A Claim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
