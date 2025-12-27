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
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WelcomeDashboard from "./pages/dashboard/WelcomeDashboard";
import AddBlogs from "./components/dashboard/blogs/AddBlogs";
import AddLinks from "./components/dashboard/Links/AddLinks";

import Blogs from "./pages/blogs/Blogs";
import SingleBlog from "./pages/blogs/SingleBlog";

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

  // check if current route is dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Hide Navbar on dashboard */}
      {!isDashboardRoute && <Navbar />}

      <div className="flex-grow">
        <ScrollToTop />

        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          {/* --- Private Dashboard Routes --- */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<WelcomeDashboard />} />
              <Route path="Blogs" element={<AddBlogs />} />
              <Route path="Links" element={<AddLinks />} />
            </Route>
          </Route>
          {/* --- Services & Treatments --- */}
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
          />{" "}
          <Route
            path="*"
            element={<h1 className="text-center mt-20">404 Not Found</h1>}
          />
        </Routes>
      </div>

      {/* ✅ Hide Footer on dashboard */}
      {!isDashboardRoute && <Footer />}
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
