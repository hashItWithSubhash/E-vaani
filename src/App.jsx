import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/aboutUs";
import Team from "./pages/Team";  
import Contact from "./pages/Contact";  

function App() {
  return (
    <Router>
      <Routes>

        {/* Common Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* User Panel */}
        <Route path="/dashboard" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      


        <Route path="/" element={<>
          <Hero />
          <Services />
          <Banner />
          <Subscribe />
          <Banner2 />
          <Footer />
        </>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />  {/* ✅ Fix: Now properly imported */}
        <Route path="/contact" element={<Contact />} />  {/* ✅ Fix: Now properly imported */}
      </Routes>
    </Router>
  );
}

export default App;