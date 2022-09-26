import React from "react";
import { useSelector } from "react-redux";

// import "./thanks.css";
const ThanksScreen = () => {
  const storeData = useSelector((state) => state.claims);
  console.log("ThanksScreen store data", storeData);
  return (
    <>
      <b> Thanks for placed the Claim</b>
      <div className="parent">
        <p>{JSON.stringify(storeData, null, 2)}</p>
      </div>
    </>
  );
};

export default ThanksScreen;
