import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/service/') || location.pathname.startsWith('/treatment/');

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Footer />
          </>
        } />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/treatment/:id" element={<ServiceDetail />} />
      </Routes>
      {!isDetailPage && <Footer />}
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
