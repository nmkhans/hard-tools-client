import React, { useEffect, useState } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import ApplicationRoutes from './global/ApplicationRoutes/ApplicationRoutes';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './global/Loading/Loading';


const App = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setShowSection(false);
    } else {
      setShowSection(true);
    }
  }, [location.pathname])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      {showSection && <Header user={user} />}
      <ApplicationRoutes />
      {showSection && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
