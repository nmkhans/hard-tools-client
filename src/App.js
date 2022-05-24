import React from 'react';
import './App.css';
import ApplicationRoutes from './global/ApplicationRoutes/ApplicationRoutes';
import Header from './global/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ApplicationRoutes />
    </div>
  );
}

export default App;
