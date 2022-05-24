import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ApplicationRoutes from './global/ApplicationRoutes/ApplicationRoutes';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
      <Footer />
    </div>
  );
}

export default App;
