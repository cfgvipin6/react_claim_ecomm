import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import Loader from "./components/shared/loader";
import Header from "./components/shared/header/header";
import ClaimBar from "./components/shared/claimBar/claimBar";
import Footer from "./components/shared/footer/footer";

//Container
import FileClaim from "./containers/fileClaim/fileClaim";
import IncidentInfo from "./containers/incidentInformation/incidentInfo";
import ServiceOptions from "./containers/serviceOptions/serviceOptions";
import ServiceFulfillment from "./containers/serviceFulfillment/serviceFulfillment";
import ClaimSummary from "./containers/claimSummary/claimSummary";
import ClaimPlaced from './containers/claimPlaced/claimPlaced';

function App() {
  const isSpinner = useSelector((state) => state.transaction.isSpinner);
  return (
    <Container>
      <Header />
      <ClaimBar />
      {isSpinner && <Loader show={true} />}
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/fileClaim" />}
            />
            <Route path="/fileClaim" element={<FileClaim />}>
              {/* <Route path=":id" element={<TransactionDetails />} /> */}
            </Route>
            <Route path="/incidentInfo" element={<IncidentInfo />}></Route>
            <Route path="/serviceOptions" element={<ServiceOptions />}></Route>
            <Route
              path="/serviceFulfillment"
              element={<ServiceFulfillment />}
            ></Route>
            <Route
              path="/claimSummary"
              element={<ClaimSummary />}
            ></Route>
            <Route path="/claimPlaced" element={<ClaimPlaced />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
      <ToastContainer icon={false} />
    </Container>
  );
}

export default App;
