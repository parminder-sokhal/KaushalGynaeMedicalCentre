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
import HelpsManageHormonalAndEmotionalChanges from "./pages/treatements/HelpsManageHormonalAndEmotionalChanges";
import AntenatalCareAndCheckups from "./pages/treatements/AntenatalCareAndCheckups";
import MenopauseAndWomensHealthSupport from "./pages/treatements/MenopauseAndWomensHealthSupport";
import FamilyPlanningAndContraceptiveServices from "./pages/treatements/FamilyPlanningAndContraceptiveServices";
import HighRiskPregnancyManagement from "./pages/treatements/HighRiskPregnancyManagement";
import UltrasonographyAndImagingServices from "./pages/treatements/UltrasonographyAndImagingServices";
import GynaeSurgicalProcedures from "./pages/treatements/GynaeSurgicalProcedures";
import InfertilityServicesAndIUI from "./pages/treatements/InfertilityServicesAndIUI";
import NormalVaginalDeliveryAndCSection from "./pages/treatements/NormalVaginalDeliveryAndCSection";



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
            path="/treatments/helps-manage-hormonal-and-emotional-changes"
            element={<HelpsManageHormonalAndEmotionalChanges />}
          />
         <Route
            path="/treatments/antenatal-care-and-checkups"
            element={<AntenatalCareAndCheckups />}
          />
         <Route
            path="/treatments/menopause-and-womens-health-support"
            element={<MenopauseAndWomensHealthSupport />}
          />
         <Route
            path="/treatments/family-planning-and-contraceptive-services"
            element={<FamilyPlanningAndContraceptiveServices />}
          />
         <Route
            path="/treatments/high-risk-pregnancy-management"
            element={<HighRiskPregnancyManagement />}
          />
         <Route
            path="/treatments/ultrasonography-and-imaging-services"
            element={<UltrasonographyAndImagingServices />}
          />
         <Route
            path="/treatments/gynae-surgical-procedures"
            element={<GynaeSurgicalProcedures />}
          />
         <Route
            path="/treatments/infertility-services-and-iui"
            element={<InfertilityServicesAndIUI />}
          />
         <Route
            path="/treatments/normal-vaginal-delivery-and-c-section"
            element={<NormalVaginalDeliveryAndCSection />}
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
