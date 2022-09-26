import React from "react";

const IncidentInfoView = ({incidentDetails}) => {
  return (
    <>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Date of incident</span>
        <p className="mb-0">{incidentDetails?.incidentDate ?? ""}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Reason for claim</span>
        <p className="mb-0">{incidentDetails?.claimReason ?? ""}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Description</span>
        <p className="mb-0">{incidentDetails?.describeIssue ?? ""}</p>
      </div>
    </>
  );
};

export default IncidentInfoView;
