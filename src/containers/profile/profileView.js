const ProfileView = ({ profileDetails }) => {
  return (
    <>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Full Name</span>
        <p className="mb-0">{profileDetails?.fullName ?? ""}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Address</span>
        <p className="mb-0 text-end">{profileDetails?.address ?? ""}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Email Address</span>
        <p className="mb-0">{profileDetails?.emailAddress ?? ""}</p>
      </div>
      <div className="d-flex justify-content-between border-bottom py-3">
        <span className="d-block">Contact Number</span>
        <p className="mb-0">{`+91-${profileDetails?.contactNumber ?? ""}`}</p>
      </div>
    </>
  );
};

export default ProfileView;
