import React from "react";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import { ClaimBar, Footer, Header } from "./components";

//Container
import {
  ClaimPlaced,
  ClaimSummary,
  FileClaim,
  IncidentInfo,
  Profile,
  ServiceFulfillment,
  ThanksScreen,
  ServiceOptions,
  Home,
  Account,
  MyDevices,
  TechServices,
  ProfileFormik
} from "./containers";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <ClaimBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/fileClaim" element={<FileClaim />} />
            <Route path="/profile" element={<ProfileFormik />} />

            <Route path="/incidentInfo" element={<IncidentInfo />} />
            <Route path="/serviceOptions" element={<ServiceOptions />} />
            <Route
              path="/serviceFulfillment"
              element={<ServiceFulfillment />}
            />
            <Route path="/claimSummary" element={<ClaimSummary />} />
            <Route path="/claimPlaced" element={<ClaimPlaced />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/myDevices" element={<MyDevices />} />
            <Route path="/techServices" element={<TechServices />} />
            <Route path="/thanks" element={<ThanksScreen />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <ToastContainer icon={false} />
    </Container>
  );
}

export default App;
