import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="Dashboard px-20 mt-5 mb-5">
            <div className="drawer drawer-mobile w-xl border border-primary rounded-lg shadow-lg">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center border border-primary shadow-md rounded">
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <Link className="text-black" to="/dashboard">My Order</Link>
                        </li>
                        <li>
                            <Link className="text-black" to="/my-order">My other</Link>
                        </li>
                        <li>
                            <Link className="text-black" to="/my-account">My Account</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;