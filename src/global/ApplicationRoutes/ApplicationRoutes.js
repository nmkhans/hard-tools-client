import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import Register from './../../pages/Register/Register';
import Login from './../../pages/Login/Login';
import Purchase from './../../pages/Purchase/Purchase';
import RequireAuth from '../RequireAuth/RequireAuth';
import Dashboard from '../../pages/Dashboard/Dashboard';
import MyOrder from './../../pages/Dashboard/MyOrder/MyOrder';

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchase/:id" element={
                <RequireAuth>
                    <Purchase />
                </RequireAuth>
            } />
            <Route path="/dashboard" element={
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            }>
                <Route index element={<MyOrder />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default ApplicationRoutes;