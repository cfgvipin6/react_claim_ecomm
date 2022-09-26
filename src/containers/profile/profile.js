import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { saveProfile } from "../claimSlice";

const Profile = () => {
  const profile = useSelector((state) => state.claims?.profile);
  const history = useNavigate();
  const [data, setData] = React.useState(profile ?? {});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactNumber" && value.length === 10) {
      return false;
    }
    const updateData = {
      ...data,
      [name]: value,
    };
    setData({ ...data, ...updateData });
  };
  const handleEvent = () => {
    dispatch(
      saveProfile({
        data,
      })
    );    
    history(-1);
  };
  return (
    <div className="py-4">
      <span className="d-block fw-bold mb-5">Welcome to your Profile.</span>
      <div className="mb-3 w-50">
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          value={data?.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <Input
          label="Address"
          name="address"
          type="text"
          value={data?.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <Input
          label="Email Address"
          name="emailAddress"
          type="text"
          value={data?.emailAddress}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 w-50">
        <Input
          label="Contact Number"
          name="contactNumber"
          type="number"
          value={data?.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-end w-50">
        <Button label="Update Profile" variant="primary" click={handleEvent} />
      </div>
    </div>
  );
};

export default Profile;
