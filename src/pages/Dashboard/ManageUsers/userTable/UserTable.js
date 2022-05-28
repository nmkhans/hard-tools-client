import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';
import Loading from './../../../../global/Loading/Loading';
import { toast } from 'react-toastify';

const UserTable = ({ currentUser, refetch }) => {
    const [user, loading] = useAuthState(auth);
    const requesterEmail = user?.email;
    const { name, email, role } = currentUser;

    if(loading) {
        return <Loading />
    }

    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify({requester: requesterEmail})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                toast.success('Role update successfull')
                refetch()
            }
        })
    }

    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>{email}</td>
            <td>{role ? "admin" : "user"}</td>
            <td>
                {
                    <button onClick={handleAdmin} className="btn btn-sm bg-primary text-white">Make Admin</button>
                }
            </td>
        </tr>
    );
};

export default UserTable;