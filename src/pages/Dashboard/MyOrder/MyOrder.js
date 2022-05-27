import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loading from './../../../global/Loading/Loading';
import OrderTable from './OrderTable/OrderTable';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email;
    const {data: orders, isLoading, refetch} = useQuery('my-orders', () => (
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res => res.json())
    ))

    if(loading || isLoading) {
        return <Loading />
    }

    return (
        <div className="MyOrder">
            <div className="MyOrder__title text-center">
                <h2 className="text-2xl text-primary font-semibold inline-block border-b-2 border-accent pb-2 mb-5">Your Orders:</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderTable key={order._id} order={order} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;