import React, { useEffect, useState } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ApplicationRoutes from './global/ApplicationRoutes/ApplicationRoutes';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [showSection, setShowSection] = useState(false);
  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowSection(false);
    } else {
      setShowSection(true);
    }
  }, [location.pathname])

  return (
    <div className="App">
      {showSection && <Header />}
      <ApplicationRoutes />
      {showSection && <Footer />}
    </div>
  );
}

export default App;
