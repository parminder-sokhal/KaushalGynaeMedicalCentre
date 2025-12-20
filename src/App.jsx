import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* --- Services Pages --- */
import AntenatalCare from "./pages/services/AntenatalCare";
import NormalDelivery from "./pages/services/NormalDelivery";
import GynaeSurgical from "./pages/services/GynaeSurgical";
import InfertilityIUI from "./pages/services/InfertilityIUI";
import Ultrasonography from "./pages/services/Ultrasonography";

/* --- Treatment Pages --- */
import HighRiskPregnancy from "./pages/treatements/HighRiskPregnancy";
import FamilyPlanning from "./pages/treatements/FamilyPlanning";
import MenopauseHealth from "./pages/treatements/MenopauseHealth";
import PostnatalCare from "./pages/treatements/PostnatalCare";
import AboutUs from "./pages/AboutUs";

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <ScrollToTop />
        <Routes>
          {/* --- Home --- */}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUs />
              </>
            }
          />

          {/* --- Services --- */}
          <Route path="/services/antenatal-care" element={<AntenatalCare />} />
          <Route
            path="/services/normal-delivery"
            element={<NormalDelivery />}
          />
          <Route path="/services/gynae-surgical" element={<GynaeSurgical />} />
          <Route
            path="/services/infertility-iui"
            element={<InfertilityIUI />}
          />
          <Route
            path="/services/ultrasonography"
            element={<Ultrasonography />}
          />

          {/* --- Treatments --- */}
          <Route
            path="/treatments/high-risk-pregnancy"
            element={<HighRiskPregnancy />}
          />
          <Route
            path="/treatments/family-planning"
            element={<FamilyPlanning />}
          />
          <Route
            path="/treatments/menopause-health"
            element={<MenopauseHealth />}
          />
          <Route
            path="/treatments/postnatal-care"
            element={<PostnatalCare />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
