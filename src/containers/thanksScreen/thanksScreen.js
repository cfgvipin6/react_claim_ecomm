import React from "react";
import { useSelector } from "react-redux";

// import "./thanks.css";
export const ThanksScreen = () => {
  const storeData = useSelector((state) => state.claims);
  return (
    <>
      <b> Thanks for placed the Claim</b>
      <div className="parent">
        <p>{JSON.stringify(storeData, null, 2)}</p>
      </div>
    </>
  );
};

