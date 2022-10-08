import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { saveProfile } from "../../store/claimSlice";
import { Formik, Form } from "formik";
import { validate } from "./profile.schema";

const initialValues = {
  fullName: "",
  address: "",
  password: "",
  confirmPassword: "",
  contactNumber: "",
};

export const ProfileFormik = () => {
  const profileData = useSelector((state) => state.claims?.profile);
  const history = useNavigate();

  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={profileData ?? initialValues} // profile data is exist when page load then set profile data otherwise initial values
      enableReinitialize={true}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          saveProfile({
            data: values,
          })
        );
        resetForm();
        history(-1);
      }}
    >
      {/*formik callback function that name is only Render */}
      {function Render({
        values,
        isSubmitting,
        handleReset,
        isValidating,
        setValues,
        ...formikProps
      }) {
        useEffect(() => {
          const keys = Object.keys(profileData);
          if (keys?.length) {
            setValues({
              ...values,
              ...profileData,
            });
          }
        }, [profileData]);

        console.log(formikProps, "formikProps");
        return (
          <div className="py-4">
            <span className="d-block fw-bold mb-3">
              Welcome to your Profile.
            </span>
            <Form>
              <Input label="Full Name" name="fullName" type="text" />
              <Input label="Address" name="address" type="text" />
              <Input label="Email Address" name="emailAddress" type="text" />
              <Input
                label="Contact Number"
                name="contactNumber"
                type="number"
              />
              <Input label="Password" name="password" type="password" />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <div className="d-flex justify-content-end w-50">
                <Button
                  label="Update Profile"
                  variant="primary"
                  type="submit"
                  disabled={isValidating || isSubmitting}
                  style={{
                    cursor:
                      isValidating || isSubmitting ? "not-allowed" : "pointer",
                  }}
                />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
