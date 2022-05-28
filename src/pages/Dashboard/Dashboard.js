import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../../global/Loading/Loading';
import { useQuery } from 'react-query';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;

    const { data: currentUser, isLoading } = useQuery('user-info', () => (
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
    ))

    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <div className="Dashboard px-10 mt-5 mb-5">
            <div className="drawer drawer-mobile w-xl border border-primary rounded-lg shadow-lg">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col border border-primary shadow-md rounded p-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            <Link className="text-black" to="/dashboard/my-profile">My Profile</Link>
                        </li>
                        {
                            (currentUser?.role !== "admin") && (
                                <>
                                    <li>
                                        <Link className="text-black" to="/dashboard">My Order</Link>
                                    </li>
                                    <li>
                                        <Link className="text-black" to="/dashboard/add-review">Add a Review</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            (currentUser?.role === "admin") && (
                                <>
                                    <li>
                                        <Link to="/dashboard">Add Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Manage Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">Manage Orders</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-users">Manage Users</Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;