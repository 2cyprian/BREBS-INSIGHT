import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './App.css';
import ContactUs from './pages/contact-us/contact';
import ServiceCard from './pages/services/ServiceCard';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomeRoute from './pages/Home/HomeRoute';
import AboutUs from './pages/aboutus/AboutUs';
import ScrollToTop from './components/ScrolltoTop';
import LoadingSpinner from './components/Loader/LoadSpanner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading delay
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show only the loader while loading
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* Animate content fade-in after loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }} // Adjust speed here
      >
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<ServiceCard />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </motion.div>

      <Footer />
    </Router>
  );
}

export default App;
