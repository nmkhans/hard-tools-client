import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import Register from './../../pages/Register/Register';
import Login from './../../pages/Login/Login';
import Purchase from './../../pages/Purchase/Purchase';

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchase/:id" element={<Purchase />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default ApplicationRoutes;