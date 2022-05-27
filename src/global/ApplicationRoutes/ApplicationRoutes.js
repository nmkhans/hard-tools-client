import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../../pages/Home/Home';
import Register from './../../pages/Register/Register';
import Login from './../../pages/Login/Login';
import Purchase from './../../pages/Purchase/Purchase';
import RequireAuth from '../RequireAuth/RequireAuth';
import Dashboard from '../../pages/Dashboard/Dashboard';
import MyOrder from './../../pages/Dashboard/MyOrder/MyOrder';
import MyProfile from './../../pages/Dashboard/MyProfile/MyProfile';
import AddrReview from './../../pages/Dashboard/AddReview/AddrReview';
import Checkout from './../../pages/Checkout/Checkout';

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
                <Route path="my-profile" element={<MyProfile />} />
                <Route path="add-review" element={<AddrReview />} />
            </Route>
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default ApplicationRoutes;