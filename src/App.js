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
import ClaimBar from "./components/shared/claimBar/claimBar";
import Footer from "./components/shared/footer/footer";
import Header from "./components/shared/header/header";

//Container
import ClaimPlaced from "./containers/claimPlaced/claimPlaced";
import ClaimSummary from "./containers/claimSummary/claimSummary";
import FileClaim from "./containers/fileClaim/fileClaim";
import IncidentInfo from "./containers/incidentInformation/incidentInfo";
import Profile from "./containers/profile/profile";
import ServiceFulfillment from "./containers/serviceFulfillment/serviceFulfillment";
import ServiceOptions from "./containers/serviceOptions/serviceOptions";
import ThanksScreen from "./containers/thanksScreen/thanksScreen";
import Home from "./containers/home/home";
import Account from "./containers/account/account";
import MyDevices from "./containers/myDevices/myDevices";
import TechServices from "./containers/techServices/techServices";

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
            <Route path="/profile" element={<Profile />} />

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
