import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../../../global/Loading/Loading';
import UserTable from './userTable/UserTable';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('all-users', () => (
        fetch('http://localhost:5000/users')
            .then(res => res.json())
    ))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="ManageUsers">
            <div className="manage__users text-center">
                <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">All users:</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserTable key={user._id} currentUser={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;